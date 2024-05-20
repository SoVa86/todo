<script>
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    let intValue = '';

    function btnClick(){
        if(intValue.length){
            dispatch('add', {text: intValue});
            intValue = '';

        }
    };
</script>


<div class="list-top">
    <input class="top-int" type="text" bind:value={intValue}>
    <button class="top-btn" on:click={btnClick}>Добавить</button>
</div>


<style>
    .list-top{
        display: grid;
        grid-template-columns: 75% 25%;
        grid-template-rows: 35px;
    }

    .top-int{
        border: none;
        outline: none;
        border-radius: 5px 0 0 5px;
        font-family: 'Courier New', Courier, monospace;
    }

    .top-btn{
        border: none;
        border-radius: 0 5px 5px 0;
        background: #6fb3fc;
        font-family: 'Courier New', Courier, monospace;
        transition: 0.2s;
    }
    .top-btn:hover{
        background: #4d8dd1;
        cursor: pointer;
    }
</style>