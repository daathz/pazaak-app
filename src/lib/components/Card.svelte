<script lang="ts">
    import type { cardType } from '../data/types';

    export let id = '';
    export let type: cardType = 'main';
    export let value: number;

    $: displayValue =
        type === 'plus' ? '+' + value : type === 'minus' ? '-' + value : value;

    const types: cardType[] = ['main', 'plus', 'minus'];

    let isValidCard =
        types.includes(type) &&
        ((type === 'main' && value > 0 && value <= 10) ||
            (value > 0 && value <= 6));
</script>

{#if isValidCard}
    <div {id} class="card" on:click>
        <div class="card-inner {type}">
            <span>{displayValue}</span>
        </div>
    </div>
{:else}
    <div class="error">Not valid type or value</div>
{/if}

<style>
    .card {
        height: 6rem;
        width: 4rem;
        border-radius: 8px;
        border: 1px solid #cccccc;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.26);
        padding: 0.5rem;
        color: #000000;
        background-color: #fcfcfc;
        cursor: pointer;
    }

    .card-inner {
        height: 6rem;
        width: 4rem;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        vertical-align: middle;
    }

    .card-inner.main {
        background-color: #31e981;
    }

    .card-inner.plus {
        background-color: #e87461;
    }

    .card-inner.minus {
        background-color: #0080ff;
    }

    span {
        font-family: 'Cascadia Code';
        background-color: #fcfcfc;
        border: 1px solid #fcfcfc;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        user-select: none;
    }

    .error {
        background-color: red;
        color: white;
    }
</style>
