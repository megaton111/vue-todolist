<template>
  <todolist-wrap>
    <template v-for="(item, idx) in dones" :key="idx">
      <todoItem :item="item"></todoItem>
    </template>
  </todolist-wrap>
</template>

<script>
  import { computed } from "vue";
  import { useStore } from "vuex";
  export default {
    name : "DONE" ,
    setup () {
      const store = useStore();
      const dones = computed(() => store.getters.done ) ; 
      return { dones } ;
    } ,
  }
</script>