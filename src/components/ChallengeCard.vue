<script setup>
import { RouterLink } from "vue-router";

const props = defineProps(["challenge"]);
</script>

<template>
  <div class="card">
    <div class="card-img">
      <img :src="props.challenge.screenshot" :alt="props.challenge.title" />
    </div>
    <div class="card-info">
      <h4>{{ props.challenge.title }}</h4>
      <div class="tag">{{ props.challenge.level }}</div>
      <p>
        {{ props.challenge.desc }}
      </p>
    </div>
    <div class="card-action">
      <a
        :href="props.challenge.source"
        target="_blank"
        rel="noopener noreferrer"
      >
        CHALLENGE
        <font-awesome-icon :icon="['fas', 'external-link-square']" />
      </a>
      <RouterLink :to="props.challenge.route">DEMO</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #6247aa;
  max-width: calc(100vw / 5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-img {
  padding: 1rem;
  border-bottom: 1px solid #6247aa;
}
.card-img img {
  width: 90%;
  vertical-align: middle;
  cursor: nesw-resize;
}
.card-img img:hover {
  transform: scale(1.2);
  transition: all 0.8s;
}
.card-info {
  position: relative;
  padding: 1rem;
  margin-bottom: auto;
  text-align: left;
}
.card-info > p {
  margin-top: 1rem;
  font-size: 14px;
  color: #9f9f9f;
}
.card-info .tag {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #6247aa;
  padding: 0.15rem 1rem;
  font-size: 10px;
  font-weight: bold;
  border-radius: 30px;
}
.card-action {
  border-top: 1px solid #6247aa;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}
.card-action > a {
  text-decoration: none;
  color: #c8b6ff;
  padding: 0 1rem;
  border: 1px solid #6247aa;
  font-size: 14px;
}
.card-action > a:hover {
  color: #c8b6ff;
  background-color: #6247aa;
}
@media screen and (max-width: 1440px) {
  .card {
    max-width: calc(100vw / 4);
  }
}
@media screen and (max-width: 1024px) {
  .card {
    max-width: calc(100vw / 3);
  }
}
@media screen and (max-width: 880px) {
  .card {
    max-width: calc(100vw / 2.4);
  }
}
@media screen and (max-width: 560px) {
  .card {
    max-width: 90vw;
  }
}
</style>
