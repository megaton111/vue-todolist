<template>
  <div class="item" v-for="(item, idx) in items" :key="idx" :class="{ done : item.done }">
    <div class="check">
      <button type="button" :class="{ active : item.done }" @click="checkHandler( item.index )">
        <unicon name="check-square" fill="#333" width="16" height="16" v-if="item.done"></unicon>
        <unicon name="square-full" fill="#333" width="16" height="16" v-else></unicon>
      </button>
    </div>
    <div class="title">{{ item.title }}</div>
    <div class="btns">
      <button type="button" @click="removeHandler( item.index )">
        <unicon name="trash-alt" fill="#333" width="20" height="20"></unicon>
      </button>
    </div>
  </div>
</template>

<script>
  // import { computed } from "vue";
  export default {
    name : 'todoItem' , 
    props : [ 'items' ] ,
    methods : {
      removeHandler( value ) { this.$store.commit( "removeList", value ) ; } , 
      checkHandler ( value ) { this.$store.commit( "checkList", value ) ; } , 
    }
  }
</script>

<style lang="scss" scoped>

</style>