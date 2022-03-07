<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/" class="home-btn">Back to Home</RouterLink>
    <h3>
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      challenges coded with
      <a href="https://vuejs.org/" target="_blank">Vue 3</a>
      by
      <a href="https://github.com/jacoblindev" target="_blank"> Jacob Lin </a>
    </h3>
  </nav>
</template>

<style scoped>
nav {
  font-size: 16px;
  font-weight: 300;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  padding: 1rem;
  color: #6247aa;
  background: #111;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.home-btn {
  padding: 0.4rem 1.5rem;
  border: 1px solid #6247aa;
}
.home-btn:hover {
  background: #6247aa;
}
nav a {
  color: #c8b6ff;
  text-decoration: none;
  font-weight: bold;
}
@media screen and (max-width: 780px) {
  nav {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
