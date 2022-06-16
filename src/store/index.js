import { createStore } from "vuex";

import authModule from "./module/auth/index.js";

const store = createStore({
  modules: {
    auth: authModule,
  },
});

export default store;
