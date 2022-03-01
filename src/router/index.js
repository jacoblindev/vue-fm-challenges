import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      // This is the Vue 3 default scaffold views, keep it as reference!
      path: "/scaffold",
      name: "scaffold",
      component: () => import("@/views/ScaffoldViews/ScaffoldView.vue"),
      children: [
        {
          path: "",
          name: "Vue3",
          component: () => import("@/views/ScaffoldViews/Vue3View.vue"),
        },
        {
          path: "about",
          name: "about",
          component: () => import("@/views/ScaffoldViews/AboutView.vue"),
        },
      ],
    },
  ],
});

export default router;
