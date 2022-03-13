<script setup>
import FooterNav from "../../components/FooterNav.vue";
</script>

<template>
  <section class="four-card-feature">
    <header>
      <h1 id="sub-title">Reliable, efficient delivery</h1>
      <h1 id="main-title">Powered by Technology</h1>
      <p>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </header>

    <main>
      <div class="card cyan">
        <h3>Supervisor</h3>
        <p>Monitors activity to identify project roadblocks</p>
        <img src="./assets/icon-supervisor.svg" alt="icon-supervisor" />
      </div>

      <div class="card red">
        <h3>Team Builder</h3>
        <p>
          Scans our talent network to create the optimal team for your project
        </p>
        <img src="./assets/icon-team-builder.svg" alt="icon-team-builder" />
      </div>

      <div class="card orange">
        <h3>Karma</h3>
        <p>Regularly evaluates our talent to ensure quality</p>
        <img src="./assets/icon-karma.svg" alt="icon-karma" />
      </div>

      <div class="card blue">
        <h3>Calculator</h3>
        <p>Uses data from past projects to provide better delivery estimates</p>
        <img src="./assets/icon-calculator.svg" alt="icon-calculator" />
      </div>
    </main>
  </section>

  <FooterNav />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");

section.four-card-feature {
  --pri-red: hsl(0, 78%, 62%);
  --pri-cyan: hsl(180, 62%, 55%);
  --pri-orange: hsl(34, 97%, 64%);
  --pri-blue: hsl(212, 86%, 64%);
  --Very-Dark-Blue: hsl(234, 12%, 34%);
  --Grayish-Blue: hsl(229, 6%, 66%);
  --Very-Light-Gray: hsl(0, 0%, 98%);
  font-family: "Poppins", sans-serif;
  font-size: 15px;
}
.four-card-feature {
  background-color: var(--Very-Light-Gray);
  min-height: 100vh;
}
/* Header Section */
header {
  text-align: center;
  padding: 4rem;
  width: 45%;
  margin: 0 auto;
}

#sub-title {
  color: var(--Very-Dark-Blue);
  font-weight: 200;
}

#main-title {
  color: var(--Very-Dark-Blue);
  font-weight: 600;
}

header p {
  color: var(--Grayish-Blue);
  font-size: 0.84em;
  margin-top: 1em;
}
/* Main Section */
main {
  width: 960px;
  margin: 0 auto;
  padding: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    ". red ."
    "cyan red blue"
    "cyan orange blue"
    ". orange .";
  grid-gap: 1.8em;
}

.card {
  background-color: #fff;
  color: var(--Grayish-Blue);
  font-size: 0.8em;
  padding: 2em;
  border-radius: 4px;
  box-shadow: 0 10px 25px -10px rgba(114, 164, 204, 0.8);
}

.card h3 {
  color: var(--Very-Dark-Blue);
  font-size: 1rem;
  margin-bottom: 0.8em;
}

.card img {
  float: right;
  margin-top: 2.5em;
  width: 20%;
}

.red {
  border-top: 4px solid var(--pri-red);
  grid-area: red;
}

.cyan {
  border-top: 4px solid var(--pri-cyan);
  grid-area: cyan;
}

.orange {
  border-top: 4px solid var(--pri-orange);
  grid-area: orange;
}

.blue {
  border-top: 4px solid var(--pri-blue);
  grid-area: blue;
}
/* Tablet Version */
@media screen and (max-width: 1080px) {
  header {
    width: 80%;
  }

  main {
    width: 80%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "cyan ."
      "cyan orange"
      "red orange"
      "red blue"
      ". blue";
  }
}

/* Mobile Version */
@media screen and (max-width: 420px) {
  header {
    width: 100%;
    padding: 6rem 0.8rem;
  }

  #sub-title,
  #main-title {
    font-size: 1.6rem;
  }

  header p {
    padding: 0 2em;
    font-size: 1em;
  }

  main {
    width: 80%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "cyan"
      "red"
      "orange"
      "blue";
  }
}
</style>
