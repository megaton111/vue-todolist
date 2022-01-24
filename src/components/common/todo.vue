<template>
  <todoListWrap>
    <template v-for="(item, idx) in todos" :key="idx">
      <todoItem :item="item"></todoItem>
    </template>
  </todoListWrap>
</template>

<script>
  import todoListWrap from '../layout/todoList' ; 
  import todoItem from '../layout/todoItem' ; 
  import { computed } from "vue";
  import { useStore } from "vuex";

  export default {
    name : "TODO"  , 
    components : {
      todoListWrap , 
      todoItem ,
    } , 
    setup () {
      const store = useStore();
      const todos = computed(() => store.getters.todo ) ; 
      return { todos } ;
    } ,
  }
</script>