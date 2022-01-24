<template>
  <div class="item" :class="{ done : item.done }">
    
    <div class="check">
      <button type="button" :class="{ active : item.done }" @click="checkHandler( item.index )">
        <unicon name="check-square" fill="#333" width="16" height="16" v-if="item.done"></unicon>
        <unicon name="square-full" fill="#333" width="16" height="16" v-else></unicon>
      </button>
    </div>
    
    <div class="title">{{ item.title }}</div>

    <div class="btns" v-if="!item.done">
      <button type="button" @click="modifyToggle( true )">
        <unicon name="edit-alt" fill="#333" width="16" height="16"></unicon>
      </button>
      <button type="button" @click="removeHandler( item.index )">
        <unicon name="trash-alt" fill="#333" width="16" height="16"></unicon>
      </button>
    </div>

    <transition name="fade">
      <div class="modify" v-if="openModify">
        <input type="text" v-model="modifyTitle" />
        <button type="button" @click="modifyHandler({ idx : item.index , title : modifyTitle })">
          <unicon name="check-circle" fill="#8c49f8" width="24" height="24"></unicon>
        </button>
      </div>
    </transition>

  </div>
</template>

<script>
  // import { computed } from "vue";
  export default {
    name : 'todoItem' , 
    props : [ 'item' ] ,
    data () {
      return {
        modifyTitle : null ,
        openModify : false , 
      }
    } , 
    methods : {
      removeHandler( value ) { this.$store.commit( "removeList", value ) ; } , 
      checkHandler ( value ) { this.$store.commit( "checkList", value ) ; } , 
      modifyHandler( value ) { 
        this.$store.commit( "modifyList", value ) ; 
        this.modifyToggle( false ) ; 
      } , 
      modifyToggle( value ) { 
        this.modifyTitle = this.item.title ; 
        this.openModify = value ;
      } ,
    } ,
  }
</script>