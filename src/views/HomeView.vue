<script setup>
import { ref, computed } from "vue";
import { useChallengeStore } from "../stores/challenge";
import ChallengeCard from "../components/ChallengeCard.vue";

const challengeStore = useChallengeStore();

const searchByName = ref("");
const filterByLevel = ref("");

const filteredChallenges = computed(() => {
  let filteredArr = challengeStore.challenges;
  if (filterByLevel.value !== "") {
    switch (filterByLevel.value) {
      case "NEWBIE":
        filteredArr = filteredArr.filter((e) => e.level.includes("NEWBIE"));
        break;
      case "JUNIOR":
        filteredArr = filteredArr.filter((e) => e.level.includes("JUNIOR"));
        break;
      default:
        filteredArr = filteredArr.filter((e) =>
          e.level.includes(filterByLevel.value)
        );
        break;
    }
  }
  if (searchByName.value !== "") {
    filteredArr = filteredArr.filter((e) =>
      e.title.toLowerCase().includes(searchByName.value.toLowerCase())
    );
  }
  return filteredArr;
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
      <section id="hero-welcome">
        <h2>Welcome to my Frontend Mentor's challenge solutions with Vue 3!</h2>
        <q>
          Frontend Mentor challenges help you improve your coding skills by
          building realistic projects.
        </q>
        <h4>
          My goal is to use these challenges to practice my Vue 3 & CSS skills.
        </h4>
        <div>
          <a
            target="_blank"
            href="https://github.com/jacoblindev/vue-fm-challenges"
            rel="noopener noreferrer"
          >
            <font-awesome-icon :icon="['fab', 'github']" size="lg" />
            | REPOSITORY
          </a>
        </div>
      </section>
      <section id="hero-img">
        <img src="../assets/undraw_experience_design.svg" alt="undraw" />
      </section>
    </section>
    <nav id="filter-navbar">
      <span>Challengs</span>
      <span>
        <input
          type="text"
          v-model="filterByLevel"
          list="filter-by-level"
          placeholder="Filter by level"
        />
        <datalist id="filter-by-level">
          <option>NEWBIE</option>
          <option>JUNIOR</option>
        </datalist>
      </span>
      <span>
        <input
          type="text"
          v-model="searchByName"
          placeholder="Search by name"
        />
      </span>
    </nav>
    <section id="cards-section">
      <template v-for="(challenge, index) in filteredChallenges" :key="index">
        <ChallengeCard v-bind:challenge="challenge" />
      </template>
      <div id="empty-msg" v-if="filteredChallenges.length === 0">
        Nothing matched..., please filter or search again! Cheers~!
      </div>
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
  background-color: #181818e8;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  border-bottom: 1px solid #6247aa;
  z-index: 99;
}
#home-navbar > a {
  margin: 0.5rem 0;
  padding: 0.25rem 3rem;
  border-left: 1px solid #6247aa;
  border-right: 1px solid #6247aa;
}
#home-navbar > a > img {
  height: 3rem;
  vertical-align: middle;
}
main {
  padding: 5rem 0 2rem;
}
main section {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}
#hero-section {
  align-items: center;
  padding: 3rem 5rem;
}
#hero-welcome {
  width: 50%;
  flex-direction: column;
}
#hero-welcome > h2 {
  font-size: 2.6rem;
}
#hero-welcome > q {
  background-color: #6247aa;
  border-left: 5px solid #c8b6ff;
  border-right: 5px solid #c8b6ff;
  padding: 0.8rem;
  font-weight: bold;
}
#hero-welcome > div > a {
  text-decoration: none;
  color: #c8b6ff;
  text-align: center;
  padding: 0.5rem;
  border: #c8b6ff 1px solid;
}
#hero-welcome > div > a:hover {
  background-color: #6247aa;
}
#hero-img {
  width: 50%;
}
#hero-img > img {
  width: 70vh;
}
#filter-navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 7rem;
  margin: 1.5rem 0;
  border-top: 1px solid #6247aa;
  border-bottom: 1px solid #6247aa;
  position: sticky;
  top: 4.5rem;
  z-index: 88;
  background-color: #181818;
}
#filter-navbar > span {
  padding: 0.5rem 1.2rem;
  border-right: 1px solid #6247aa;
  font-weight: bold;
}
#filter-navbar > span:first-child {
  border-left: 1px solid #6247aa;
}
#filter-navbar input {
  background-color: transparent;
  border: none;
  vertical-align: middle;
  padding: 0.2rem 0.8rem;
  border-radius: 50px;
  outline: none;
  caret-color: #6247aa;
  outline: 1px dashed #6247aa;
  color: #c8b6ff;
  font-size: 16px;
  vertical-align: bottom;
  text-align: center;
}
#filter-navbar input:focus {
  outline: 2px solid #c8b6ff;
}
#cards-section {
  text-align: center;
  flex-wrap: wrap;
}
#cards-section #empty-msg {
  min-height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
@media screen and (max-width: 1200px) {
  #hero-section {
    flex-direction: column-reverse;
    padding: 2rem;
  }
  #hero-welcome {
    width: 100%;
    text-align: center;
  }
  #hero-welcome > h2 {
    font-size: 1.6rem;
  }
  #hero-welcome > a {
    width: 100%;
  }
  #hero-img {
    width: 100%;
  }
  #hero-img > img {
    width: 40vh;
  }
}
@media screen and (max-width: 800px) {
  #filter-navbar {
    flex-direction: column;
    padding: 0;
  }
  #filter-navbar > span:not(:first-child) {
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
