<template>
  
  <headerWrap />

  <containerWrap>
    
    <tabButtonWrap 
      :items="tabs" 
      :current="comp" 
      @updateTab="tabClick" 
    />
    <tabContentWrap>
      <keep-alive>
        <component v-bind:is="comp"></component> 
      </keep-alive>
    </tabContentWrap> <!-- end of tab-contents -->
    
    <registerWrap v-if="comp == 'TODO'"></registerWrap>

  </containerWrap>

</template>

<script>
import {ref} from 'vue';
import headerWrap from './components/layout/header' ; 
import containerWrap from './components/layout/container' ; 
import tabButtonWrap from './components/layout/tabButtons' ; 
import tabContentWrap from './components/layout/tabContent' ; 
import registerWrap from './components/layout/register' ; 
import TODO from './components/common/todo' ; // eslint-disable-line no-unused-vars
import DONE from './components/common/done' ; // eslint-disable-line no-unused-vars
// import { computed } from "vue";
// import { useStore } from "vuex";

export default {
  name: 'App',

  components: {
    headerWrap , 
    containerWrap ,
    tabButtonWrap , 
    tabContentWrap , 
    registerWrap , 
    TODO ,
    DONE
  },

  setup() {
    let comp = ref('TODO') 
    ,   tabs = [ { name : 'TO DO', value : 'TODO' }, { name : 'DONE', value : 'DONE' } ] 
    ; 
    const tabClick = compName => comp.value = compName ;
    return { comp, tabs, tabClick } ;
  }
};
</script>
