<script lang="ts">
    import type { card } from '../data/types';
    import Card from './Card.svelte';

    export let table: card[];
    export let score: number;
    export let scoreLabel: string;
    export let set: number;
</script>

<span>{set}/3</span>
<span>{scoreLabel}: {score}</span>
<div class="table">
    {#each table as { id, type, value } (id)}
        <Card {id} {type} {value} />
    {/each}
</div>
