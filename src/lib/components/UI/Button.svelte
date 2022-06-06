<script lang="ts">
    export let type = 'button';
    export let disabled = false;
</script>

<button {type} {disabled} on:click><slot /></button>

<style>
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #0080ff;
        color: #ffffff;
        font-family: 'Segoe UI';
        font-size: 14px;
        border: 1px solid #0080ff;
        border-radius: 8px;
        height: 36px;
        padding: 0 18px;
    }

    button:hover {
        background-color: rgba(0, 128, 255, 0.8);
    }

    button:disabled {
        background-color: #cccccc;
        border-color: #cccccc;
    }
</style>
