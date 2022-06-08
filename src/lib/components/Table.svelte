<script lang="ts">
    import type { card } from '../data/types';
    import Card from './Card.svelte';

    export let table: card[];
</script>

<div class="table">
    {#each table as { id, type, value } (id)}
        <Card {id} {type} {value} />
    {/each}
</div>
