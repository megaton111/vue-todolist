<template>
  <div class="inputWrap">
    <div class="input"><input type="text" v-model="todoValue" @keyup.enter="addListHandler"></div>
    <div class="button"><button type="button" @click="addListHandler">ADD</button></div>
  </div> <!-- end of inputWrap -->
</template>

<script>
  // import {ref} from 'vue';
  // import { useStore } from "vuex";
  export default {
    name : 'register' ,
    data () {
      return {
        todoValue : null 
      }
    } ,
    methods : {
      addListHandler() {
        this.$store.commit("addList", this.todoValue ) ; 
        this.todoValue = '' ; 
      }
    }
    // setup() {
    //   const store = useStore();
    //   let todoValue = ref('') ; 
    //   const addListHandler = () => {
    //     store.commit("addList", todoValue ) ; 
    //   };
    //   return { todoValue , addListHandler } ;
    // }

    
  }
</script>

<style lang="scss" scoped>

</style>