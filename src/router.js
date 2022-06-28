import { createRouter, createWebHistory } from "vue-router";

import TheHome from "./pages/TheHome.vue";
import UserAuth from "./pages/UserAuth.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: TheHome },
    { path: "/login", component: UserAuth },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
