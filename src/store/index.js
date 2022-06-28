import { createStore } from "vuex";

import authModule from "./module/auth/index.js";
import blogModule from "./module/blog/index.js";

const store = createStore({
  modules: {
    auth: authModule,
    blog: blogModule,
  },
});

export default store;
