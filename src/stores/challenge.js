import { defineStore } from "pinia";

export const useChallengeStore = defineStore({
  id: "challenge",
  state: () => ({
    challenges: [
      {
        title: "FAQ Accordion Card",
        level: "NEWBIE",
        desc: "In this challenge, you'll be building out an FAQ accordion. This is anextremely common front-end pattern, so it's a great opportunity to get some practice in!",
        source:
          "https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam",
        route: "/faq-accordion-card",
        screenshot:
          "/vue-fm-challenges/Screenshots/faq-accordion-card-desktop.png",
      },
      {
        title: "Four Card Feature Section",
        level: "NEWBIE",
        desc: "A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.",
        source:
          "https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK",
        route: "/four-card-feature",
        screenshot:
          "/vue-fm-challenges/Screenshots/four-card-feature-desktop.png",
      },
      {
        title: "Social Media Dashboard with Theme Switcher",
        level: "JUNIOR",
        desc: "This challenge will be a perfect chance to practice your Grid skills. The color theme switcher also adds a nice additional test.",
        source:
          "https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H",
        route: "/social-media-dashboard",
        screenshot:
          "/vue-fm-challenges/Screenshots/social-media-dashboard-desktop.png",
      },
      {
        title: "Intro Component with Sign-Up Form",
        level: "NEWBIE",
        desc: "Practice building out a sign-up form complete with client-side validation using JavaScript.",
        source:
          "https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1",
        route: "/intro-sign-up",
        screenshot: "/vue-fm-challenges/Screenshots/intro-sign-up-desktop.png",
      },
    ],
  }),
  getters: {},
  actions: {},
});
