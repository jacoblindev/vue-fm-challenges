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
  color: #f2f2f2;
  background: #181818;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.home-btn {
  background: #f2f2f2;
  padding: 0.4rem 1.5rem;
  border-radius: 5px;
}
nav a {
  color: hsl(240, 73%, 65%);
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
