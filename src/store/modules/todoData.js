const todoStore = {
  state: {
    idx : 6 , 
    todoList: [
      { index : 0, title: 'vue js 공식문서 보기', done : false } ,
      { index : 1, title: '투두리스트 작업', done : false } ,
      { index : 2, title: '가이드 공유', done : false } ,
      { index : 3, title: '공통 디자인 시안 작업', done : false } ,
      { index : 4, title: '기획자 미팅', done : false } ,
      { index : 5, title: '개발 리뷰', done : false } ,
    ] ,
  },
  mutations: {
    addList(state, value) {
      if (value == '') return;
      let index = state.idx++; 
      state.todoList.push({ title: value, done: false, index : index }); 
    },
    removeList(state, value) {
      let getIdx = value; 
      let findIdx = state.todoList.findIndex((item) => item.index == getIdx); 
      state.todoList.splice(findIdx, 1); 
    },
    checkList(state, value) {
      let getIdx = value; 
      let findIdx = state.todoList.findIndex((item) => item.index == getIdx); 
      state.todoList[findIdx].done = !state.todoList[findIdx].done;
    }
  },
  getters: {
    todo(state) {
      return state.todoList.filter(item => !item.done);
    } ,
    done(state) {
      return state.todoList.filter(item => item.done);
    } ,
  }
}; 
export default todoStore;