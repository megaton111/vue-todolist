import { createStore } from "vuex";
import todoStore from './modules/todoData';
import createPersistedState from "vuex-persistedstate";

export default createStore({
  strict: false,
  modules: {
    todoStore: todoStore,
  },

  // plugins: [createPersistedState()], // 전체를 적용할 경우
  
  // 원하는 모듈만 적용할
  plugins: [ createPersistedState({
    paths: ["todoStore"],
  }), ],

});