import { createStore } from "vuex";
import todoStore from './modules/todoData';

export default createStore({
  strict: false ,
  modules: {
    todoStore: todoStore,
  },
});
 