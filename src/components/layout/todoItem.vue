<template>
  <div class="item" v-for="(item, idx) in items" :key="idx" :class="{ done : item.done }">
    <div class="check"><input type="checkbox" :checked="item.done" :disabled="item.done"></div>
    <div class="title">{{ item.title }}</div>
    <!-- <div class="btns">
      <button type="button">삭제</button>
    </div> -->
  </div>
</template>

<script>
  export default {
    name : 'todoItem' , 
    props : [ 'items' ] ,
  }
</script>

<style lang="scss" scoped>

</style>