const todoStore = {
  state: {
    name: 'todo sdadasdsad',
    todoList: [
      { title: 'vue js 공식문서 보기', done : false } ,
      { title: '투두리스트 작업', done : false } ,
      { title: '가이드 공유', done : true } ,
      { title: '공통 디자인 시안 작업', done : false } ,
      { title: '기획자 미팅', done : true } ,
      { title: '개발 리뷰', done : false } ,
    ] ,
  },
  mutations: {
  },
  getters: {
    todo(state) {
      return state.todoList.filter(item => !item.done);
    } ,
    done(state) {
      return state.todoList.filter(item => item.done);
    }
  }
}; 
export default todoStore;