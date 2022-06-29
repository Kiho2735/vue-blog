import { createRouter, createWebHistory } from "vue-router";

import TheHome from "./pages/TheHome.vue";
import EntireBlogs from "./pages/EntireBlogs.vue";
import UserAuth from "./pages/UserAuth.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: TheHome, meta: { title: "Home" } },
    {
      path: "/blog",
      name: "Blog",
      component: EntireBlogs,
      meta: { title: "Blog" },
    },
    {
      path: "/login",
      name: "Login",
      component: UserAuth,
      meta: { title: "Login" },
    },
    {
      path: "/:notFound(.*)",
      name: "Not Found",
      component: NotFound,
      meta: { title: "Not Found" },
    },
  ],
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach((to, _, next) => {
  document.title = `${to.meta.title} | Calm`;
  next();
});

export default router;
