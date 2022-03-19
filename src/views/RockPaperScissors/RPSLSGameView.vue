<script setup>
import { ref } from "vue";
import FooterNav from "../../components/FooterNav.vue";

let score = ref(0);
let modalOpen = ref(false);
</script>

<template>
  <div id="rpsls-game">
    <div id="title-section">
      <img
        src="./assets/logo-bonus.svg"
        alt="rock paper scissors lizard spock"
      />
      <div class="score-card">
        <p class="score-title">SCORE</p>
        <p class="score-count">{{ score }}</p>
      </div>
    </div>
    <div class="game-area">
      <img src="./assets/bg-pentagon.svg" alt="bg-pentagon" />
      <button class="rock">
        <font-awesome-icon :icon="['fas', 'hand-back-fist']" />
      </button>
      <button class="paper">
        <font-awesome-icon :icon="['fas', 'hand']" />
      </button>
      <button class="scissors">
        <font-awesome-icon :icon="['fas', 'hand-scissors']" />
      </button>
      <button class="lizard">
        <font-awesome-icon :icon="['fas', 'hand-lizard']" />
      </button>
      <button class="spock">
        <font-awesome-icon :icon="['fas', 'hand-spock']" />
      </button>
    </div>
    <button id="btn-rules" @click="modalOpen = true">RULES</button>
    <Transition name="fade">
      <div v-if="modalOpen" class="modal-bg">
        <div class="modal-card">
          <h2 class="modal-title">RULES</h2>
          <img
            src="./assets/image-rules-bonus.svg"
            alt="Image explain the rules"
          />
          <button id="btn-close" @click="modalOpen = false">
            <img src="./assets/icon-close.svg" alt="close" />
          </button>
        </div>
      </div>
    </Transition>
  </div>
  <FooterNav />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap");

#rpsls-game {
  --Scissors-Gradient-dark: hsl(39, 89%, 49%);
  --Scissors-Gradient: hsl(40, 84%, 53%);
  --Paper-Gradient-dark: hsl(230, 89%, 62%);
  --Paper-Gradient: hsl(230, 89%, 65%);
  --Rock-Gradient-dark: hsl(349, 71%, 52%);
  --Rock-Gradient: hsl(349, 70%, 56%);
  --Lizard-Gradient-dark: hsl(261, 73%, 60%);
  --Lizard-Gradient: hsl(261, 72%, 63%);
  --Spock-Gradient-dark: hsl(189, 59%, 53%);
  --Spock-Gradient: hsl(189, 58%, 57%);
  --Dark-Text: hsl(229, 25%, 31%);
  --Score-Text: hsl(229, 64%, 46%);
  --Header-Outline: hsl(217, 16%, 45%);
  --Radial-Gradient-start: hsl(214, 47%, 23%);
  --Radial-Gradient-end: hsl(237, 49%, 15%);

  min-height: 100vh;
  position: relative;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: radial-gradient(
    circle at 50% 0,
    var(--Radial-Gradient-start),
    var(--Radial-Gradient-end)
  );
  overflow-x: hidden;
}
/* Title Section Styles */
#title-section {
  border: 3px solid var(--Header-Outline);
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
}
#title-section img {
  max-width: 4em;
}
.score-card {
  background-color: #fff;
  border-radius: 0.3rem;
  padding: 0.4rem 1rem;
  text-align: center;
}
.score-card p {
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: 700;
  line-height: 1rem;
}
.score-title {
  color: var(--Score-Text);
  font-size: 0.7rem;
  letter-spacing: 0.1rem;
}
.score-count {
  color: var(--Dark-Text);
  font-size: 3rem;
  padding: 1rem;
}
/* Game Area Style */
.game-area {
  position: relative;
  width: 100%;
  min-height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.game-area img {
  max-width: 15em;
}
.game-area button {
  width: 2.4em;
  height: 2.4em;
  font-size: 3rem;
  background-color: aliceblue;
  color: var(--Dark-Text);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -1.2em;
  cursor: pointer;
}
.winner {
  box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.14),
    0 0 0 40px rgba(255, 255, 255, 0.12), 0 0 0 60px rgba(255, 255, 255, 0.1);
}
.game-area .paper {
  transform: rotate(55deg) translate(2.4em) rotate(-55deg);
  border: 0.3em solid var(--Paper-Gradient);
  box-shadow: 0 5px 0 0 var(--Paper-Gradient-dark),
    inset 0 5px 0 0 rgba(0, 0, 0, 0.2);
}
.game-area .rock {
  transform: rotate(127deg) translate(2.4em) rotate(-127deg);
  border: 0.3em solid var(--Rock-Gradient);
  box-shadow: 0 5px 0 0 var(--Rock-Gradient-dark),
    inset 0 5px 0 0 rgba(0, 0, 0, 0.2);
}
.game-area .scissors {
  transform: rotate(199deg) translate(2.4em) rotate(-199deg);
  border: 0.3em solid var(--Scissors-Gradient);
  box-shadow: 0 5px 0 0 var(--Scissors-Gradient-dark),
    inset 0 5px 0 0 rgba(0, 0, 0, 0.2);
}
.game-area .spock {
  transform: rotate(271deg) translate(2.4em) rotate(-271deg);
  border: 0.3em solid var(--Spock-Gradient);
  box-shadow: 0 5px 0 0 var(--Spock-Gradient-dark),
    inset 0 5px 0 0 rgba(0, 0, 0, 0.2);
}
.game-area .lizard {
  transform: rotate(343deg) translate(2.4em) rotate(-343deg);
  border: 0.3em solid var(--Lizard-Gradient);
  box-shadow: 0 5px 0 0 var(--Lizard-Gradient-dark),
    inset 0 5px 0 0 rgba(0, 0, 0, 0.2);
}
/* RULES' BTN Styles */
#btn-rules {
  background-color: transparent;
  color: #fff;
  border: 2px solid var(--Header-Outline);
  border-radius: 0.5rem;
  padding: 0.6rem 2rem;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.1rem;
  position: absolute;
  bottom: 2rem;
  right: 50%;
  transform: translateX(50%);
  cursor: pointer;
}
#btn-rules:hover {
  background-color: var(--Dark-Text);
}
/* RULES' Modal Styles */
.modal-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.65);
}
.modal-card {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
}
.modal-card .modal-title {
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--Dark-Text);
  margin: 3rem 0;
}
#btn-close {
  background-color: transparent;
  border: none;
  border-radius: 50%;
  padding: 2rem;
  cursor: pointer;
}
/* RULES' Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* RWD */
@media screen and (min-width: 700px) {
  /* Title Section Styles */
  #title-section {
    margin: 0 auto;
    max-width: 35em;
  }
  #title-section img {
    max-width: 6em;
  }
  .score-card {
    padding: 1rem;
  }
  .score-title {
    font-size: 0.8rem;
  }
  .score-count {
    font-size: 4rem;
  }
  /* RULES' BTN Styles */
  #btn-rules {
    right: 2rem;
    transform: unset;
  }
  /* RULES' Modal Styles */
  .modal-card {
    width: unset;
    min-height: unset;
    position: relative;
    padding: 2rem;
    border-radius: 1rem;
  }
  .modal-card .modal-title {
    margin: 0;
    align-self: flex-start;
  }
  #btn-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
}
</style>
