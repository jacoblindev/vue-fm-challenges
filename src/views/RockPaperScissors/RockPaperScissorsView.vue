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
      <img src="./assets/logo-bonus.svg" alt="LOGO" />
      <div id="score-card">
        <span class="title">SCORE</span>
        <span class="score">{{ score }}</span>
      </div>
    </section>
    <section id="game-area">
      <button class="paper">
        <font-awesome-icon :icon="['fas', 'hand']" />
      </button>
      <button class="rock">
        <font-awesome-icon :icon="['fas', 'hand-back-fist']" />
      </button>
      <button class="scissors">
        <font-awesome-icon :icon="['fas', 'hand-scissors']" />
      </button>
      <button class="spock">
        <font-awesome-icon :icon="['fas', 'hand-spock']" />
      </button>
      <button class="lizard">
        <font-awesome-icon :icon="['fas', 'hand-lizard']" />
      </button>
      <button class="computer" disabled>
        <font-awesome-icon :icon="['fas', 'question']" />
      </button>
    </section>
    <button id="rules" @click="showModal = true">RULES</button>
    <div class="rule-modal">
      <div class="modal">
        <div class="row">
          <h2 class="title">RULES</h2>
          <button @click="showModal = false" class="close">
            <img src="./assets/icon-close.svg" alt="close" />
          </button>
        </div>
        <img src="./assets/image-rules-bonus.svg" alt="image of the rules" />
      </div>
    </div>
  </div>
  <FooterNav />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap");

#rock-paper-scissors {
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

  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 400;
  min-height: 100vh;
  background-image: radial-gradient(
    circle at 50% 0,
    var(--Radial-Gradient-start),
    var(--Radial-Gradient-end)
  );
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
#game-area {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 450px;
  position: relative;
  border-radius: 50%;
  margin: 100px;
  background-image: url(./assets/bg-pentagon.svg);
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
}
#game-area button {
  width: 120px;
  height: 120px;
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
  margin: -60px;
  cursor: pointer;
}
#game-area button:hover {
  box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.14),
    0 0 0 40px rgba(255, 255, 255, 0.12), 0 0 0 60px rgba(255, 255, 255, 0.1);
}
#game-area .paper {
  transform: rotate(55deg) translate(200px) rotate(-55deg);
  border: 1rem solid var(--Paper-Gradient);
  box-shadow: 0 5px 0 0 var(--Paper-Gradient-dark),
    inset 0 5px 0 0 rgba(0, 0, 0, 0.2);
}
#game-area .rock {
  transform: rotate(127deg) translate(200px) rotate(-127deg);
  border: 1rem solid var(--Rock-Gradient);
  box-shadow: 0 5px 0 0 var(--Rock-Gradient-dark),
    inset 0 5px 0 0 rgba(0, 0, 0, 0.2);
}
#game-area .scissors {
  transform: rotate(199deg) translate(200px) rotate(-199deg);
  border: 1rem solid var(--Scissors-Gradient);
  box-shadow: 0 5px 0 0 var(--Scissors-Gradient-dark),
    inset 0 5px 0 0 rgba(0, 0, 0, 0.2);
}
#game-area .spock {
  transform: rotate(271deg) translate(200px) rotate(-271deg);
  border: 1rem solid var(--Spock-Gradient);
  box-shadow: 0 5px 0 0 var(--Spock-Gradient-dark),
    inset 0 5px 0 0 rgba(0, 0, 0, 0.2);
}
#game-area .lizard {
  transform: rotate(343deg) translate(200px) rotate(-343deg);
  border: 1rem solid var(--Lizard-Gradient);
  box-shadow: 0 5px 0 0 var(--Lizard-Gradient-dark),
    inset 0 5px 0 0 rgba(0, 0, 0, 0.2);
}
#game-area button.computer {
  background-color: transparent;
  border: 0.5rem solid var(--Dark-Text);
  box-shadow: none;
  cursor: auto;
}
button#rules {
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
/* RULES Modal */
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
.modal {
  background-color: aliceblue;
  padding: 2rem;
  border: none;
  border-radius: 1rem;
  text-align: center;
}
.modal img {
  width: 90%;
}
.modal .row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal .title {
  color: var(--Dark-Text);
}
.modal button.close {
  background-color: transparent;
  border: none;
  cursor: pointer;
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
  #game-area {
    width: 300px;
    height: 300px;
  }
  #game-area button {
    width: 110px;
    height: 110px;
    margin: -55px;
  }
  #game-area button.paper {
    transform: rotate(55deg) translate(130px) rotate(-55deg);
  }
  #game-area button.rock {
    transform: rotate(127deg) translate(130px) rotate(-127deg);
  }
  #game-area button.scissors {
    transform: rotate(199deg) translate(130px) rotate(-199deg);
  }
  #game-area button.spock {
    transform: rotate(271deg) translate(130px) rotate(-271deg);
  }
  #game-area button.lizard {
    transform: rotate(343deg) translate(130px) rotate(-343deg);
  }
}
</style>
