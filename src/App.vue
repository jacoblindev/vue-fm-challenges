<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  color: #c8b6ff;
  background: #181818;
  transition: color 0.5s, background-color 0.5s;
  line-height: 1.6;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body::-webkit-scrollbar {
  width: 0.3rem;
}
body::-webkit-scrollbar-track {
  background-color: #c8b6ff;
}
body::-webkit-scrollbar-thumb {
  border-radius: 0.3rem;
  background-color: #6247aa;
  outline: 1px solid #6247aa;
}
</style>
