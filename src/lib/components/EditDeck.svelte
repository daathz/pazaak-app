<script lang="ts">
    import { createEventDispatcher, onDestroy } from 'svelte/internal';
    import { fly } from 'svelte/transition';
    import Button from './UI/Button.svelte';
    import AvailableCards from './AvailableCards.svelte';
    import CurrentDeck from './CurrentDeck.svelte';
    import deck from '../data/deck-store';

    let isButtonEnabled = false;
    let deckCardCount: number;

    const dispatch = createEventDispatcher();

    $: isButtonEnabled = deckCardCount === 10;

    const unsubscribe = deck.subscribe((items) => {
        deckCardCount = items.length;
    });

    function startGame() {
        dispatch('startgame');
    }

    onDestroy(() => unsubscribe());
</script>

<svelte:head>
    <title>Edit Deck</title>
</svelte:head>

<div class="section">
    <CurrentDeck />
    <AvailableCards />
    {#if isButtonEnabled}
        <div
            class="button-container"
            transition:fly="{{duration: 300, y: 200}}"
        >
            <Button on:click={startGame}>
                Start Game
            </Button>
        </div>
    {/if}
</div>

<style>
    .section {
        display: flex;
        flex-direction: row;
    }

    .button-container {
        position: absolute;
        bottom: 2rem;
        left: 50%;
    }
</style>
