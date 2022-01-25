<template>
  <div class="inputWrap">
    <div class="input"><input type="text" v-model="todoValue" @keyup.enter="addListHandler"></div>
    <div class="button"><button type="button" @click="addListHandler">ADD</button></div>
  </div> <!-- end of inputWrap -->
</template>

<script>
  import todoMixin from '../mixin/todoMixin' ; 
  export default {
    mixins : [todoMixin] ,
    name : 'register' ,
    
    data () {
      return {
        todoValue : null 
      }
    } ,
  }
</script>