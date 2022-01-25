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
      return { todos } ;
    } ,
  }
</script>