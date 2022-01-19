<template>
  <todoListWrap>
    <todoItem :items="dones"></todoItem>
  </todoListWrap>
</template>

<script>
  import todoListWrap from '../layout/todoList' ; 
  import todoItem from '../layout/todoItem' ; 
  // import { mapState } from 'vuex' ;
  import { computed } from "vue";
  import { useStore } from "vuex";
  export default {
    name : "DONE" ,
    components : {
      todoListWrap , 
      todoItem ,
    } , 
    setup () {
      const store = useStore();
      const dones = computed(() => store.getters.done ) ; 
      return { dones } ;
    } ,
  }
</script>