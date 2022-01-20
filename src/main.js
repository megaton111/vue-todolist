import { createApp } from 'vue'
import App from './App.vue';
import store from "./store";
// import "@/plugins/fontAwesomeIcon.js";
import "@/assets/scss/_index.scss";

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faUserSecret, faTrashAlt, faCheckSquare  } from '@fortawesome/free-solid-svg-icons' ;
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// library.add( faUserSecret, faTrashAlt );
// library.add( faCheckSquare );

import Unicon from 'vue-unicons'
import { uniLayerGroupMonochrome, uniCarWash, uniTrashAlt, uniSquareFull, uniCheckSquare  } from 'vue-unicons/dist/icons'

Unicon.add([uniLayerGroupMonochrome, uniCarWash, uniTrashAlt, uniSquareFull, uniCheckSquare]); 

const app = createApp(App);
// app.component('font-awesome-icon', FontAwesomeIcon)

app
  .use(store)
  .use(Unicon)
  .mount("#app");
