<script setup>
import { computed } from "vue";
import ArrowDown from "./ArrowDownIcon.vue";
import ArrowUp from "./ArrowUpIcon.vue";

const props = defineProps(["question", "answer", "isOpen"]);

let qColor = computed(() =>
  props.isOpen ? "hsl(238, 29%, 16%)" : "hsl(237, 12%, 33%)"
);
let fontWeight = computed(() => (props.isOpen ? "700" : "400"));
</script>

<template>
  <p id="question">
    {{ question }}
    <ArrowUp v-if="isOpen" />
    <ArrowDown v-else />
  </p>
  <p id="answer" v-if="isOpen">{{ answer }}</p>
</template>

<style scoped>
#question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  color: v-bind(qColor);
  font-weight: v-bind(fontWeight);
}
#question:hover {
  color: hsl(14, 88%, 65%);
}
#answer {
  margin: 1rem 2rem 0 0;
  font-size: 14px;
  font-weight: 400;
  color: hsl(240, 6%, 50%);
}
@media screen and (max-width: 799px) {
  #question {
    padding-right: 0;
  }
}
</style>
