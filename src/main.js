import { createApp } from "vue";

import App from "./App.vue";

import BaseButton from "./components/ui/BaseButton.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";
import BaseLoading from "./components/ui/BaseLoading.vue";

import router from "./router.js";
import store from "./store/index.js";

// Font Awesome Icons
import FontAwesomeIcon from "./icon.js";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);
app.component("base-loading", BaseLoading);

// Font Awesome
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(store);

app.mount("#app");
