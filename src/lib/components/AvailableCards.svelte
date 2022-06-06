<script lang="ts">
    import type { card, cardType } from '../data/types';
    import Card from './Card.svelte';
    import deck from '../data/deck-store';

    const cardTypes: cardType[] = ['plus', 'minus'];
    const cardValueList = [1, 2, 3, 4, 5, 6];

    function addCardToDeck({ type, value }: card) {
        deck.addCard({ id: generateId(), type, value });
    }

    function generateId() {
        return Math.random().toString();
    }
</script>

<div id="availableCards">
    <h1>Available Cards</h1>
    <div class="cards-container">
        {#each cardTypes as type}
            {#each cardValueList as value}
                <Card
                    {type}
                    {value}
                    on:click={addCardToDeck.bind(this, { type, value })}
                />
            {/each}
        {/each}
    </div>
</div>

<style>
    #availableCards {
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
