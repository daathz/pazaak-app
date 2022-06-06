<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import type { Unsubscriber } from 'svelte/store';
    import type { card } from '../data/types';
    import Card from './Card.svelte';
    import deck from '../data/deck-store';

    let hand: card[] = [];

    let unsubscribe: Unsubscriber;

    onMount(() => {
        unsubscribe = deck.subscribe((items) => {
            const shuffled = items.sort(() => 0.5 - Math.random());
            hand = shuffled.slice(0, 4);
        });
    });

    onDestroy(() => unsubscribe());
</script>

{#each hand as { id, type, value } (id)}
    <Card {type} {value} />
{/each}
