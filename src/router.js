import { createRouter, createWebHistory } from "vue-router";

import TheHome from "./pages/TheHome.vue";
import EntireBlogs from "./pages/EntireBlogs.vue";
import UserAuth from "./pages/UserAuth.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", name: "Home", component: TheHome },
    { path: "/blog", name: "Blog", component: EntireBlogs },
    { path: "/login", component: UserAuth },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
