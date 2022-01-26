<template>
  <todolist-wrap>
    <template v-for="(item, idx) in todos" :key="idx">
      <todoItem :item="item"></todoItem>
    </template>
  </todolist-wrap>
</template>

<script>
  import { computed } from "vue";
  import { useStore } from "vuex";
  export default {
    name : "TODO"  , 
    setup () {
      const store = useStore();
      const todos = computed(() => store.getters.todo ) ; 

      // let arr = todos.value.sort(function(a,b){
      //   return new Date(b.date) - new Date(a.date);
      // });

      // console.log( '1 : ', todos.value ) ; 
      // console.log( '2 : ', arr ) ; 




      return { todos } ;
    } ,
  }
</script>