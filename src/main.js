import { createApp } from "vue";
import router from "@/router/index";
import App from "@/App.vue";
import Antd from "ant-design-vue";
import store from "./store";
import 'ant-design-vue/dist/antd.css'

const app = createApp(App);

app.use(store);
app.use(Antd); // same as Vue.use in Vue 2.X
app.use(router);
app.mount("#app");
