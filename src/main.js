import { createApp } from "vue";

import App from "./App.vue";

import BaseDialog from "./components/ui/BaseDialog.vue";

import router from "./router.js";
import store from "./store/index.js";

const app = createApp(App);

app.component("base-dialog", BaseDialog);

app.use(router);
app.use(store);

app.mount("#app");
