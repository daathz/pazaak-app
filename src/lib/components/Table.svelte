<script lang="ts">
    import type { card } from '../data/types';
    import Card from './Card.svelte';

    export let table: card[];
    export let score: number;
    export let scoreLabel: string;
    export let set: number;
</script>

<div class="table-ui">
    <span>{set}/3</span>
    <span>{scoreLabel}: {score}</span>
    <div class="table">
        {#each table as { id, type, value } (id)}
            <Card {id} {type} {value} />
        {/each}
    </div>
</div>

<style>
    span {
        margin: 0.5rem;
    }

    span:first-child {
        margin-bottom: 0;
    }

    .table-ui {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .table {
        display: grid;
        grid-template-columns: 5rem 5rem 5rem;
        gap: 0.5rem;
    }
</style>
