<script lang="ts">
    import Card from './Card.svelte';
    import deck from '../data/deck-store';

    function removeCard(id: string) {
        deck.removeCard(id);
    }
</script>

<div id="currentDeck">
    <h1>Current Deck</h1>
    <div class="cards-container">
        {#each $deck as { id, type, value } (id)}
            <Card {id} {type} {value} on:click={removeCard.bind(this, id)} />
        {/each}
    </div>
</div>

<style>
    #currentDeck {
        display: flex;
        flex-direction: column;
        flex: 1 1 0;
        align-items: center;
    }

    .cards-container {
        display: grid;
        grid-template-columns: 50% 50%;
        gap: 0.5rem;
    }
</style>
