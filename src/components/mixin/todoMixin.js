let todoMixin = {
  data() {
    return {
    }
  } ,
  methods: {
    removeHandler(value) { this.$store.commit("removeList", value); }, 
    checkHandler(value) { this.$store.commit("checkList", value); }, 
    modifyHandler( value ) { 
      this.$store.commit( "modifyList", value ) ; 
      this.modifyToggle( false ) ; 
    } , 
    modifyToggle(value) { 
      this.modifyTitle = this.item.title ; 
      this.openModify = value ;
    },
    addListHandler() {
      this.$store.commit("addList", this.todoValue ) ; 
      this.todoValue = '' ;
    }
  }
};
export default todoMixin;