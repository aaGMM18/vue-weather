import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";


import "../node_modules/bootstrap/";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import '@/assets/icons/css/all.min.css';
import '@/assets/css/styles.css';


createApp(App).use(store).mount("#app");
