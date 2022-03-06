import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { title: "FM Challenges | JLDev" },
    },
    {
      // This is the Vue 3 default scaffold views, keep it as reference!
      path: "/scaffold",
      name: "scaffold",
      component: () => import("@/views/ScaffoldViews/ScaffoldView.vue"),
      meta: { title: "Vue 3 | JLDev" },
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
    {
      path: "/faq-accordion-card",
      name: "FAQ-Accordion-Card",
      component: () =>
        import("@/views/FAQAccordionCard/FAQAccordionCardView.vue"),
      meta: { title: "FAQ Accordion Card | JLDev" },
    },
  ],
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

export default router;
