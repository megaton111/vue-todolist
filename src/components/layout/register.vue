<template>
  <div class="inputWrap">
    <div class="input"><input type="text" v-model="todoValue" @keyup.enter="addListHandler" placeholder="내용을 입력하세요."></div>
    <div class="date"><datepicker v-model="todoDate" /></div>
    <div class="button"><button type="button" @click="addListHandler">ADD</button></div>
  </div> <!-- end of inputWrap -->
</template>

<script>
  import todoMixin from '../mixin/todoMixin' ; 
  import Datepicker from 'vue3-datepicker'

  export default {
    mixins : [todoMixin] ,
    components : {
      Datepicker
    } , 
    name : 'register' ,
    data () {
      return {
        todoValue : null ,
        todoDate : new Date() ,
      }
    } ,
  }
</script>