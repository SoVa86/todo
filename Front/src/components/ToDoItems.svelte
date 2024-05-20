<script>
    export let id;
    export let text;
    export let done;

    import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>


<div class="list-item" class:list-item_done={done}>
    <input type="checkbox" on:change={dispatch('change', {id})} checked={done}>
    <p class="text">{text}</p>
    <button class="btn" on:click={dispatch('delete', {id})}>Delete</button>
</div>


<style>
    .list-item{
        background: #ffa0a0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        gap: 5px;
        border-radius: 5px;
    }
    .list-item_done{
        background: #a8ffa8;
        text-decoration: line-through;
    }

    .btn{
        width: 30px;
        height: 30px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background: red;
    }
    .btn:hover{
        background: #95959565;
        cursor: pointer;
    }

    .text{
        flex-grow: 1;
        font-family: 'Courier New', Courier, monospace;
    }
</style>
