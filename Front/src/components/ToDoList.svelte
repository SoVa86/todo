<script lang="ts">
    import ToDoItems from "./ToDoItems.svelte";
      import ToDoTop from "./ToDoTop.svelte";
      import { ApiModule } from '../lib/api';
  
      let items = loadData();
  
      function loadData(){
          return ApiModule.getToDo();
      }
  
      async function createToDo(event){
          await ApiModule.createToDo({
              text: event.detail.text,
              done: false
          });
          items = loadData();
      }
  
      async function deleteToDo(event){
          await ApiModule.deleteToDo(event.detail.id);
          items = loadData();
      }
  
      async function doneStatus(event){
          await ApiModule.doneStatus(event.detail.id);
          items = loadData();
      }
  </script>
  
  <div class="list">
      {#await items}
          Loading...
      {:then value} 
      <ToDoTop on:add={createToDo}/>
      <div class="list-self">
          {#each value as item }
          <ToDoItems id={item.id} text={item.text} done={item.done} on:change={doneStatus} on:delete={deleteToDo}/>
          {/each}
      </div>
      {/await}
  </div>
  
  
  <style>
      .list{
          background: rgba(126, 202, 185, 0.767);
          height: 80%;
          width: 30%;
          display: flex;
          flex-direction: column;
          padding: 40px 60px;
          border-radius: 15px;
      }
  
      .list-self{
          background: white;
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding: 30px;
          margin-top: 15px;
          border-radius: 5px;
          flex-grow: 1;
          overflow-y: auto;
      }
  </style>
  