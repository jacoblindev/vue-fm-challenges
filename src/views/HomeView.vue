<script setup>
import { ref, computed } from "vue";
import { useChallengeStore } from "../stores/challenge";
import ChallengeCard from "../components/ChallengeCard.vue";

const challengeStore = useChallengeStore();

const searchTerm = ref("");

const filteredChallenges = computed(() => {
  if (searchTerm.value !== "") {
    return challengeStore.challenges.filter((e) =>
      e.title.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  } else {
    return challengeStore.challenges;
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
    <section id="hero-section">
      <h2>Welcome to my Frontend Mentor's challenge solutions with Vue 3!</h2>
      <q>
        Frontend Mentor challenges help you improve your coding skills by
        building realistic projects.
      </q>
      <p>
        My goal is to use these challenges to practice my Vue 3 skills & vanilla
        CSS skills.
      </p>
    </section>
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
    <section id="cards-section">
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
main {
  min-height: 100vh;
  padding: 6rem 2rem 6rem;
  text-align: center;
}
main section {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}
#hero-section {
  padding: 10rem 5rem;
  flex-direction: column;
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
  #hero-section {
    padding: 3.5rem 1.5rem;
  }
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
