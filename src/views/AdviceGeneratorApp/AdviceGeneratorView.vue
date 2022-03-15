<script setup>
import { onMounted, ref } from "vue";
import FooterNav from "../../components/FooterNav.vue";
import IconDice from "./components/IconDice.vue";

let slipId = ref(0);
let slipAdvice = ref("");

onMounted(() => {
  fetchAdvice();
});

function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then(async (res) => {
      const data = await res.json();
      if (!res.ok) {
        throw new Error("Somthing went wrong?!");
      }
      return data;
    })
    .then((data) => {
      slipId.value = data.slip.id;
      slipAdvice.value = data.slip.advice;
    })
    .catch((err) => {
      slipId.value = err.type;
      slipAdvice.value = err.text;
    });
}
</script>

<template>
  <div id="advice-generator">
    <main>
      <h3>ADVICE #{{ slipId }}</h3>
      <q>{{ slipAdvice }}</q>
      <div class="divider"></div>
      <button @click="fetchAdvice">
        <IconDice />
      </button>
    </main>
  </div>
  <FooterNav />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap");

#advice-generator {
  --Light-Cyan: hsl(193, 38%, 86%);
  --Neon-Green: hsl(150, 100%, 66%);
  --Grayish-Blue: hsl(217, 19%, 38%);
  --Dark-Grayish-Blue: hsl(217, 19%, 24%);
  --Dark-Blue: hsl(218, 23%, 16%);

  font-family: "Manrope", sans-serif;
  font-size: 14px;
  min-height: 100vh;
  background-color: var(--Dark-Blue);
  display: flex;
  justify-content: center;
  align-items: center;
}
main {
  background-color: var(--Dark-Grayish-Blue);
  border-radius: 1.2rem;
  padding: 2rem;
  color: var(--Light-Cyan);
  text-align: center;
  width: 30%;
  position: relative;
}
main h3 {
  color: var(--Neon-Green);
  letter-spacing: 0.3rem;
  margin: 1.2rem 0;
}
main q {
  font-size: 2rem;
}
main .divider {
  background-image: url(./assets/pattern-divider-desktop.svg);
  background-repeat: no-repeat;
  background-position: center;
  margin: 1.5rem;
  padding: 1rem;
}
main button {
  padding: 1rem;
  border: none;
  border-radius: 50%;
  background-color: var(--Neon-Green);
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  cursor: pointer;
}
main button:hover {
  box-shadow: 0px 0px 40px 4px var(--Neon-Green);
}
@media screen and (max-width: 1200px) {
  main {
    width: 60%;
  }
}
@media screen and (max-width: 800px) {
  main {
    width: 90%;
  }
  main .divider {
    background-image: url(./assets/pattern-divider-mobile.svg);
  }
}
</style>
