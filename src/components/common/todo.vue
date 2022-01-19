<template>
  <todoListWrap>
    <todoItem :items="todos"></todoItem>
  </todoListWrap>
</template>

<script>
  import todoListWrap from '../layout/todoList' ; 
  import todoItem from '../layout/todoItem' ; 
  // import { mapState } from 'vuex' ;
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