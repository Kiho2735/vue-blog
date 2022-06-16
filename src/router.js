import { createRouter, createWebHistory } from "vue-router";

import UserAuth from "./pages/auth/UserAuth.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/login", component: UserAuth }],
});

export default router;
