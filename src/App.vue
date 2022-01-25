<template>
  
  <header-wrap title="Task">
    <count label="남은 할일" /> 
  </header-wrap>

  <container-wrap>
    
    <tabbutton-wrap 
      :items="tabs" 
      :current="comp" 
      @updateTab="tabClick" 
    />
    <tabcontent-wrap>
      <keep-alive>
        <component v-bind:is="comp"></component> 
      </keep-alive>
    </tabcontent-wrap> <!-- end of tab-contents -->
    
    <register-wrap v-if="comp == 'TODO'"></register-wrap>

  </container-wrap>

</template>

<script>
import {ref} from 'vue';
export default {
  name: 'App',
  setup() {
    let comp = ref('TODO') 
    ,   tabs = [ { name : 'TO DO', value : 'TODO' }, { name : 'DONE', value : 'DONE' } ] 
    ; 
    const tabClick = compName => comp.value = compName ;
    return { comp, tabs, tabClick } ;
  }
};
</script>
