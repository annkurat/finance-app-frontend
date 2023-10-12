import { createApp } from "vue";
import App from "./App.vue";
import store from "@/store/store";
import axios from "axios";
import router from "@/routes/index";

axios.defaults.baseURL = "http://127.0.0.1:8000/";

createApp(App).use(store).use(router).mount("#app");
