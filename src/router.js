import { createRouter, createWebHistory } from "vue-router";

import TheHome from "./pages/TheHome.vue";
import EntireBlogs from "./pages/EntireBlogs.vue";
import UserAuth from "./pages/auth/UserAuth.vue";
import UserRegistration from "./pages/auth/UserRegistration.vue";
import ResetPassword from "./pages/auth/ResetPassword.vue";
import NotFound from "./pages/NotFound.vue";

import store from "./store/index.js";

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
      meta: { title: "Login", requiresUnauth: true },
    },
    {
      path: "/register",
      name: "Register",
      component: UserRegistration,
      meta: { title: "Register", requiresUnauth: true },
    },
    {
      path: "/resetPassword",
      name: "Reset Password",
      component: ResetPassword,
      meta: { title: "Reset Password", requiresUnauth: true },
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
  if (to.meta.requiresUnauth && store.getters["auth/isAuthenticated"]) {
    document.title = `Home | Calm`;
    next({ name: "Home" });
  } else {
    document.title = `${to.meta.title} | Calm`;
    next();
  }
});

export default router;
