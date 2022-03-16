<script setup>
import { ref, computed } from "vue";
import FooterNav from "../../components/FooterNav.vue";

let score = ref(0);
let showModal = ref(false);
let showModalClass = computed(() => (showModal.value ? "flex" : "none"));
</script>

<template>
  <div id="rock-paper-scissors">
    <section id="title-score">
      <img src="./assets/logo.svg" alt="LOGO" />
      <div id="score-card">
        <span class="title">SCORE</span>
        <span class="score">{{ score }}</span>
      </div>
    </section>
    <button id="rules" @click="showModal = true">RULES</button>
    <div class="rule-modal">
      <!-- FIXME: Add the modal content -->
      <h2 @click="showModal = false">Hello Modal~~~!</h2>
    </div>
  </div>
  <FooterNav />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap");

#rock-paper-scissors {
  --Scissors-Gradient: hsl(39, 89%, 49%) to hsl(40, 84%, 53%);
  --Paper-Gradient: hsl(230, 89%, 62%) to hsl(230, 89%, 65%);
  --Rock-Gradient: hsl(349, 71%, 52%) to hsl(349, 70%, 56%);
  --Lizard-Gradient: hsl(261, 73%, 60%) to hsl(261, 72%, 63%);
  --Cyan: hsl(189, 59%, 53%) to hsl(189, 58%, 57%);
  --Dark-Text: hsl(229, 25%, 31%);
  --Score-Text: hsl(229, 64%, 46%);
  --Header-Outline: hsl(217, 16%, 45%);
  --Radial-Gradient-start: hsl(214, 47%, 23%);
  --Radial-Gradient-end: hsl(237, 49%, 15%);

  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 400;
  min-height: 100vh;
  background-image: radial-gradient(
    circle at 50% 0,
    var(--Radial-Gradient-start),
    var(--Radial-Gradient-end)
  );
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem;
  position: relative;
}
#title-score {
  border: 3px solid var(--Header-Outline);
  border-radius: 1rem;
  width: 55%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#title-score > img {
  width: 8em;
}
#score-card {
  text-align: center;
  color: var(--Dark-Text);
  background-color: white;
  padding: 0 2.4rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#score-card > .title {
  font-size: 1.2rem;
  margin: 0.5rem 0 0;
  color: var(--Score-Text);
}
#score-card > .score {
  font-size: 4.2rem;
  font-weight: 700;
  line-height: 3.5rem;
  margin-bottom: 1rem;
}
#rules {
  border: 2px solid var(--Header-Outline);
  border-radius: 0.5rem;
  padding: 0.6rem 2.4rem;
  background-color: transparent;
  color: whitesmoke;
  cursor: pointer;
  letter-spacing: 0.1rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  z-index: 2;
}
.rule-modal {
  position: absolute;
  display: v-bind(showModalClass);
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 3;
}
@media screen and (max-width: 1200px) {
  #title-score {
    width: 70%;
  }
}
@media screen and (max-width: 800px) {
  #rock-paper-scissors {
    padding: 2rem;
  }
  #title-score {
    width: 100%;
  }
  #rules {
    right: unset;
  }
}
</style>
