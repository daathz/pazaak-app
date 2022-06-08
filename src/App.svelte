<script lang="ts">
    import type { gameMode } from './lib/data/types';
    import EditDeck from './lib/components/EditDeck.svelte';
    import Match from './lib/components/Match.svelte';

    let mode: gameMode = 'edit';
</script>

<main>
    {#if mode === 'edit'}
        <EditDeck on:startgame={() => (mode = 'match')} />
    {:else if mode === 'match'}
        <Match on:backtodeckeditor={() => (mode = 'edit')} />
    {/if}
</main>

<style>
    main {
        font-family: 'Segoe UI', sans-serif;
    }
</style>
