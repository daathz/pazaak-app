<script lang="ts">
    import { onMount } from 'svelte';
    import type { card } from '../data/types';
    import { shuffle } from '../helpers/utils';
    import Card from './Card.svelte';
    import deck from '../data/deck-store';
    import Button from './UI/Button.svelte';
    import Table from './Table.svelte';

    let mainDeck: number[] = Array.from(
        { length: 40 },
        (item, index) => (item = (index % 10) + 1)
    );

    let playersSet = 0;
    let playersHand: card[] = [];
    let playersTable: card[] = [];
    let playersTurn = false;
    let playedCardThisTurn = false;
    let playersScore = 0;

    drawFromMainDeck();

    onMount(() => {
        const unsubscribe = deck.subscribe(items => {
            const shuffled = items.sort(shuffle);
            playersHand = shuffled.slice(0, 4);
        });

        unsubscribe();
    });

    function drawFromMainDeck() {
        mainDeck = mainDeck.sort(shuffle);
        const drawedCard = mainDeck.splice(0, 1)[0];
        playersTable = [
            ...playersTable,
            { id: Math.random().toString(), type: 'main', value: drawedCard },
        ];

        playersTurn = true;
        playersScore += drawedCard;

        if (playersScore === 20) stand();
    }

    function playCard(id: string) {
        if (playersTurn && !playedCardThisTurn) {
            const playedCard: card = playersHand.find(card => card.id === id);
            playersHand = playersHand.filter(card => card.id !== id);
            playersTable = [...playersTable, playedCard];
            playedCardThisTurn = true;
            playersScore +=
                playedCard.type === 'plus'
                    ? playedCard.value
                    : -playedCard.value;

            if (playersScore === 20) stand();
        }
    }

    function endTurn() {
        if (playersScore <= 20) {
            drawFromMainDeck();
            playedCardThisTurn = false;
        }
    }

    function stand() {
        playersTurn = false;
    }
</script>

<svelte:head>
    <title>Match</title>
</svelte:head>

<span>Player's score: {playersScore}</span>
<Table table={playersTable} />

<div class="user-buttons">
    <Button on:click={endTurn} disabled={!playersTurn}>End turn</Button>
    <Button on:click={stand} disabled={!playersTurn}>Stand</Button>
</div>
<div class="hand">
    {#each playersHand as { id, type, value } (id)}
        <Card {type} {value} on:click={playCard.bind(this, id)} />
    {/each}
</div>

<style>
    .hand {
        display: flex;
        flex-direction: row;
        position: absolute;
        bottom: 0;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
</style>
