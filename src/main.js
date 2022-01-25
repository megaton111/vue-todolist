import { createApp } from 'vue'
import App from './App.vue';
import store from "./store";
import "@/assets/scss/_index.scss";

// Component
import count from "@/components/common/count";
import Todo from "@/components/common/todo";
import Done from "@/components/common/done";
import headerWrap from './components/layout/header' ; 
import containerWrap from './components/layout/container' ; 
import tabButtonWrap from './components/layout/tabButtons' ; 
import tabContentWrap from './components/layout/tabContent' ; 
import registerWrap from './components/layout/register'; 
import todoListWrap from './components/layout/todoList' ; 
import todoItem from './components/layout/todoItem'; 
  
// Icon
import Unicon from 'vue-unicons'
import { uniTrashAlt, uniSquareFull, uniCheckSquare, uniEditAlt, uniCheckCircle } from 'vue-unicons/dist/icons'

Unicon.add([uniTrashAlt, uniSquareFull, uniCheckSquare, uniEditAlt, uniCheckCircle]); 

const app = createApp(App);

app.component('count', count);
app.component('TODO', Todo);
app.component('DONE', Done);
app.component('header-wrap', headerWrap);
app.component('container-wrap', containerWrap);
app.component('tabbutton-wrap', tabButtonWrap);
app.component('tabcontent-wrap', tabContentWrap);
app.component('register-wrap', registerWrap);
app.component('todolist-wrap', todoListWrap);
app.component('todoItem', todoItem);

app
  .use(store)
  .use(Unicon)
  .mount("#app");
