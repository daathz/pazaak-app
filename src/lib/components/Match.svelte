<script lang="ts">
    import { onMount } from 'svelte';
    import type { card } from '../data/types';
    import { randomBoolean, shuffle } from '../helpers/utils';
    import {createEventDispatcher} from 'svelte';
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
    let playedCardThisTurn = false;
    let playersScore = 0;

    let aiSet = 0;
    let aiHand: card[] = [];
    let aiTable: card[] = [];
    let aiScore = 0;

    const dispatch = createEventDispatcher();

    let playersTurn = randomBoolean();

    drawFromMainDeck(playersTurn);

    onMount(() => {
        const unsubscribe = deck.subscribe(items => {
            const shuffled = items.sort(shuffle);
            playersHand = shuffled.slice(0, 4);
        });

        unsubscribe();
    });

    function backToDeckEditor() {
        dispatch('backtodeckeditor');
    }

    function drawFromMainDeck(toPlayerstable: boolean) {
        mainDeck = mainDeck.sort(shuffle);
        const drawedCard = mainDeck.splice(0, 1)[0];
        if (toPlayerstable) {
            playersTable = [
                ...playersTable,
                { id: Math.random().toString(), type: 'main', value: drawedCard }
            ];

            playersScore += drawedCard;
            playersTurn = true;
            if (playersScore === 20) stand();
        } else {
            aiTable = [
                ...aiTable,
                { id: Math.random().toString(), type: 'main', value: drawedCard }
            ];
            aiScore += drawedCard;
            playersTurn = true;
            drawFromMainDeck(true);
        }
    }

    function playCard(id: string) {
        if (playersTurn && !playedCardThisTurn) {
            const playedCard = playersHand.find(card => card.id === id);
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
            playedCardThisTurn = false;
        } else if (playersScore > 20) {
            stand();
        }
        drawFromMainDeck(false);
    }

    function stand() {
        playersTurn = false;
    }
</script>

<svelte:head>
    <title>Match</title>
</svelte:head>

<Button on:click="{backToDeckEditor}">Back to Deck Editor</Button>


<Table
    table={aiTable}
    score={aiScore}
    scoreLabel="AI's score"
    set={aiSet}
/>
<Table
    table={playersTable}
    score={playersScore}
    scoreLabel="Player's score"
    set={playersSet}
/>

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
