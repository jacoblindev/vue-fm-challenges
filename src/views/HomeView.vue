<script setup>
import { ref, computed } from "vue";
import ChallengeCard from "../components/ChallengeCard.vue";
const searchTerm = ref("");
const challenges = [
  {
    title: "FAQ Accordion Card",
    level: "NEWBIE",
    desc: "In this challenge, you'll be building out an FAQ accordion. This is anextremely common front-end pattern, so it's a great opportunity to get some practice in!",
    source:
      "https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam",
    route: "/faq-accordion-card",
    screenshot: "/Screenshots/faq-accordion-card-desktop.png",
  },
  {
    title: "Four Card Feature Section",
    level: "NEWBIE",
    desc: "A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.",
    source:
      "https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK",
    route: "/four-card-feature",
    screenshot: "/Screenshots/four-card-feature-desktop.png",
  },
];
const filteredChallenges = computed(() => {
  if (searchTerm.value !== "") {
    return challenges.filter((e) =>
      e.title.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  } else {
    return challenges;
  }
});
</script>

<template>
  <nav id="home-navbar">
    <a href="#!">
      <img src="../assets/JLDev-Logo@2x.png" alt="Logo" />
    </a>
  </nav>
  <main>
    <h2>Welcome to my Frontend Mentor's challenge solutions with Vue 3!</h2>
    <q>
      Frontend Mentor challenges help you improve your coding skills by building
      realistic projects.
    </q>
    <nav id="filter-navbar">
      <h3>Challengs</h3>
      <span>
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Search by name..."
        />
      </span>
    </nav>
    <section>
      <template v-for="(challenge, index) in filteredChallenges" :key="index">
        <ChallengeCard v-bind:challenge="challenge" />
      </template>
    </section>
  </main>
  <footer>
    <h3>
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      challenges coded with
      <a href="https://vuejs.org/" target="_blank">Vue 3</a>
      by
      <a href="https://github.com/jacoblindev" target="_blank"> Jacob Lin </a>
    </h3>
  </footer>
</template>

<style scoped>
#home-navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181818;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  border-bottom: 1px solid #6247aa;
  z-index: 99;
}
#home-navbar > a {
  text-decoration: none;
  margin: 0.5rem 0;
  padding: 0.2rem 3rem;
  border-left: 1px solid #6247aa;
  border-right: 1px solid #6247aa;
}
#home-navbar > a > img {
  height: 6vh;
  vertical-align: middle;
}
hr {
  border: none;
  border-top: 1px solid #6247aa;
  margin: 1rem 0;
}
main {
  min-height: 94vh;
  padding: 6rem 2rem 6rem;
  text-align: center;
}
main section {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}
#filter-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7rem;
  margin: 1.5rem 0;
  border-top: 1px solid #6247aa;
  border-bottom: 1px solid #6247aa;
}
#filter-navbar > h3,
#filter-navbar > span {
  padding: 0.5rem 2rem;
  border-left: 1px solid #6247aa;
  border-right: 1px solid #6247aa;
}
#filter-navbar input {
  background-color: transparent;
  border: none;
  vertical-align: middle;
  padding: 0.4rem 2rem;
  border-radius: 50px;
  outline: none;
  caret-color: #6247aa;
  outline: 1px dashed #6247aa;
  color: #c8b6ff;
  font-size: 16px;
}
#filter-navbar input:focus {
  outline: 2px solid #c8b6ff;
}
footer {
  font-weight: 300;
  padding: 1rem;
  color: #6247aa;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
footer a {
  color: #c8b6ff;
  text-decoration: none;
  font-weight: bold;
}
@media screen and (max-width: 799px) {
  #filter-navbar {
    flex-direction: column;
    padding: 0;
  }
  #filter-navbar > h3 {
    padding: 0.5rem 2rem;
    border: none;
  }
  #filter-navbar > span {
    display: none;
  }
  footer {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
