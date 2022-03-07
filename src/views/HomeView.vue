<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav id="home-navbar">
    <a href="#!">
      <img src="../assets/JLDev-Logo@2x.png" alt="Logo" />
    </a>
  </nav>
  <main>
    <h2>
      Here's where I practice my Vue 3 skills with Frontend Mentor challenges!
    </h2>
  </main>
  <ul>
    <li>
      <RouterLink to="/faq-accordion-card">FAQ Accordion Card</RouterLink>
    </li>
  </ul>
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
}
#home-navbar > a {
  text-decoration: none;
  margin: 0.5rem 0;
  padding: 0.5rem 3rem;
  border-left: 1px solid #6247aa;
  border-right: 1px solid #6247aa;
}
#home-navbar > a > img {
  width: 3rem;
}
main {
  min-height: 90vh;
  padding: 8em 1em 0;
}
main > h2 {
  text-align: center;
}
footer {
  font-weight: 300;
  padding: 1rem;
  color: #6247aa;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
}
footer a {
  color: #c8b6ff;
  text-decoration: none;
  font-weight: bold;
}
@media screen and (max-width: 780px) {
  footer {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
