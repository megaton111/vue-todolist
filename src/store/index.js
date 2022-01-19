import { createStore } from "vuex";
import todoStore from './modules/todoData';

export default createStore({
  strict: true,
  modules: {
    todoStore: todoStore,
  },
});
 