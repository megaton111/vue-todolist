<template>
  <div class="count">
    <p v-if="label">{{ label }}</p>
    <span>{{ todoLen }}</span>
  </div>
</template>
<script>
  import { computed } from "vue";
  import { useStore } from "vuex";
  export default {
    name : 'count' , 
    props : {
      label : {
        type: String,
      }
    } ,
    setup () {
      const store = useStore();
      const todoLen = computed(() => store.getters.todoLen ) ; 
      return { todoLen } ; 
    } 
  }
</script>

<style lang="scss" scoped>

</style>