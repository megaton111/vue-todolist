<template>
  <header class="header">
    <h1 v-if="title">{{ title }}</h1>
    <slot></slot>
  </header>
</template>

<script>
  import { computed } from "vue";
  import { useStore } from "vuex";
  export default {
    name : 'headerWrap' ,
    props : {
      title : String ,
    } ,
    setup () {
      const store = useStore();
      const todoLen = computed(() => store.getters.todoLen ) ; 
      return { todoLen } ; 
    } 
  }
</script>