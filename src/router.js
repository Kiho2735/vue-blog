import { createRouter, createWebHistory } from "vue-router";

import TheHome from "./pages/main/TheHome.vue";
import UserAuth from "./pages/auth/UserAuth.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", name: "Home", component: TheHome },
    { path: "/login", component: UserAuth },
  ],
});

export default router;
