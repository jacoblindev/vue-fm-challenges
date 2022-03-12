import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { title: "FM Challenges | JLDev" },
    },
    {
      path: "/faq-accordion-card",
      name: "FAQ-Accordion-Card",
      component: () =>
        import("@/views/FAQAccordionCard/FAQAccordionCardView.vue"),
      meta: { title: "FAQ Accordion Card | JLDev" },
    },
    {
      path: "/four-card-feature",
      name: "Four-Card-Feature",
      component: () =>
        import("@/views/FourCardFeature/FourCardFeatureView.vue"),
      meta: { title: "Four Card Feature | JLDev" },
    },
    {
      path: "/social-media-dashboard",
      name: "Social-Media-Dashboard",
      component: () =>
        import("@/views/SocialMediaDashboard/SocialMediaDashboardView.vue"),
      meta: { title: "Social Media Dashboard | JLDev" },
    },
    {
      path: "/intro-sign-up",
      name: "Intro-Sign-Up",
      component: () =>
        import("@/views/IntroCompWithSignUp/IntroCompWithSignUpView.vue"),
      meta: { title: "Intro with Sign Up | JLDev" },
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/",
    },
  ],
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

export default router;
