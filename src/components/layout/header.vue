<template>
  <header class="header">
    <h1>Tasks</h1>
    <p class="count">남은 할일 <span>{{ todoLen }}</span></p>
  </header>
</template>

<script>
  import { computed } from "vue";
  import { useStore } from "vuex";
  export default {
    name : 'headerWrap' ,
    setup () {
      const store = useStore();
      const todoLen = computed(() => store.getters.todoLen ) ; 
      return { todoLen } ; 
    } 
  }
</script>