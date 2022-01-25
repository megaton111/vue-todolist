<template>
  <div class="tab-buttons">
    <button type="button" 
    v-for="({ name, value, idx}) in items" :key="idx"
    class="tab" 
    :class="{ active : current == value }"
    @click="tabClick( value )"
    >
      {{ name }}
    </button>
  </div> <!-- end of tab-buttons -->
</template>

<script>
  export default {
    name : 'tabButtonWrap' , 
    props : [ 'items', 'current' ] ,
    emits : [ 'updateTab' ] ,
    setup( props, context ) {
      const tabClick = value => context.emit('updateTab', value ) ;
      return { tabClick } ;
    }
  }
</script>