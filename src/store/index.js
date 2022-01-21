import { createStore } from "vuex";
import todoStore from './modules/todoData';
import createPersistedState from "vuex-persistedstate";

export default createStore({
  strict: false,
  modules: {
    todoStore: todoStore,
  },
  plugins: [ createPersistedState({
    paths: ["todoStore"],
  }), ],

});
 