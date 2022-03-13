<script setup>
import FooterNav from "../../components/FooterNav.vue";

let isDarkMode = false;
function themeSwitch() {
  if (isDarkMode) {
    document
      .querySelector(".social-media-dashboard")
      .classList.remove("dark-mode");
    isDarkMode = false;
  } else {
    document
      .querySelector(".social-media-dashboard")
      .classList.add("dark-mode");
    isDarkMode = true;
  }
}
</script>

<template>
  <div class="social-media-dashboard">
    <header>
      <div class="container">
        <div class="main-title">
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 24,008</p>
        </div>
        <label id="toggle" for="switch"
          >Dark Mode
          <input
            type="checkbox"
            name="switch"
            id="switch"
            @click="themeSwitch"
          />
          <span class="check"></span>
        </label>
      </div>
    </header>

    <main>
      <div class="card card-f">
        <div class="title">
          <img src="./assets/icon-facebook.svg" alt="Facebook-logo" />
          <p>@jacoblindev</p>
        </div>
        <div class="numbers">
          <h2>1984</h2>
          <span>FOLLOWERS</span>
        </div>
        <div class="updates up">
          <img src="./assets/icon-up.svg" alt="Up-icon" />
          <span>12 Today</span>
        </div>
      </div>
      <div class="card card-t">
        <div class="title">
          <img src="./assets/icon-twitter.svg" alt="Twitter-logo" />
          <p>@jacoblindev</p>
        </div>
        <div class="numbers">
          <h2>1088</h2>
          <span>FOLLOWERS</span>
        </div>
        <div class="updates up">
          <img src="./assets/icon-up.svg" alt="Up-icon" />
          <span>99 Today</span>
        </div>
      </div>
      <div class="card card-i">
        <div class="title">
          <img src="./assets/icon-instagram.svg" alt="Instagram-logo" />
          <p>@jacoblindev</p>
        </div>
        <div class="numbers">
          <h2>11k</h2>
          <span>FOLLOWERS</span>
        </div>
        <div class="updates up">
          <img src="./assets/icon-up.svg" alt="Up-icon" />
          <span>2008 Today</span>
        </div>
      </div>
      <div class="card card-y">
        <div class="title">
          <img src="./assets/icon-youtube.svg" alt="YouTube-logo" />
          <p>@jacoblindev</p>
        </div>
        <div class="numbers">
          <h2>8888</h2>
          <span>SUBSCRIBER</span>
        </div>
        <div class="updates down">
          <img src="./assets/icon-down.svg" alt="Down-icon" />
          <span>88 Today</span>
        </div>
      </div>
    </main>

    <section id="overview">
      <h3>Overview - Today</h3>
      <div class="s-cards">
        <div class="states">
          <h4>Page Views</h4>
          <img
            class="logo"
            src="./assets/icon-facebook.svg"
            alt="Facebook-logo"
          />
          <p>88</p>
          <span class="up"
            ><img src="./assets/icon-up.svg" alt="Up-icon" />3%</span
          >
        </div>
        <div class="states">
          <h4>Likes</h4>
          <img
            class="logo"
            src="./assets/icon-facebook.svg"
            alt="Facebook-logo"
          />
          <p>58</p>
          <span class="down"
            ><img src="./assets/icon-down.svg" alt="Down-icon" />5%</span
          >
        </div>
        <div class="states">
          <h4>Likes</h4>
          <img
            class="logo"
            src="./assets/icon-instagram.svg"
            alt="Instagram-logo"
          />
          <p>5678</p>
          <span class="up"
            ><img src="./assets/icon-up.svg" alt="Up-icon" />300%</span
          >
        </div>
        <div class="states">
          <h4>Profile Views</h4>
          <img
            class="logo"
            src="./assets/icon-instagram.svg"
            alt="Instagram-logo"
          />
          <p>58k</p>
          <span class="up"
            ><img src="./assets/icon-up.svg" alt="Up-icon" />1300%</span
          >
        </div>
        <div class="states">
          <h4>Retweets</h4>
          <img
            class="logo"
            src="./assets/icon-twitter.svg"
            alt="Twitter-logo"
          />
          <p>118</p>
          <span class="up"
            ><img src="./assets/icon-up.svg" alt="Up-icon" />308%</span
          >
        </div>
        <div class="states">
          <h4>Likes</h4>
          <img
            class="logo"
            src="./assets/icon-twitter.svg"
            alt="Twitter-logo"
          />
          <p>508</p>
          <span class="up"
            ><img src="./assets/icon-up.svg" alt="Up-icon" />550%</span
          >
        </div>
        <div class="states">
          <h4>Likes</h4>
          <img
            class="logo"
            src="./assets/icon-youtube.svg"
            alt="YouTube-logo"
          />
          <p>108</p>
          <span class="down"
            ><img src="./assets/icon-down.svg" alt="Down-icon" />50%</span
          >
        </div>
        <div class="states">
          <h4>Total Views</h4>
          <img
            class="logo"
            src="./assets/icon-youtube.svg"
            alt="YouTube-logo"
          />
          <p>1408</p>
          <span class="down"
            ><img src="./assets/icon-down.svg" alt="Down-icon" />12%</span
          >
        </div>
      </div>
    </section>
  </div>
  <FooterNav />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

.social-media-dashboard {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: var(--Text);
  background-color: var(--Main-BG);
  min-height: 100vh;
  padding-bottom: 2rem;

  --Lime-Green: hsl(163, 72%, 41%);
  --Bright-Red: hsl(356, 69%, 56%);

  --Facebook: hsl(195, 100%, 50%);
  --Twitter: hsl(203, 89%, 53%);
  --Instagram: linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%));
  --YouTube: hsl(348, 97%, 39%);

  --Toggle: hsl(230, 22%, 74%);
  --Main-BG: hsl(0, 0%, 100%);
  --Top-BG: hsl(225, 100%, 98%);
  --Card-BG: hsl(227, 47%, 96%);
  --Text-Blue: hsl(228, 12%, 44%);
  --Text: hsl(230, 17%, 14%);
}

.dark-mode {
  --Toggle: linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%);
  --Main-BG: hsl(230, 17%, 14%);
  --Top-BG: hsl(232, 19%, 15%);
  --Card-BG: hsl(228, 28%, 20%);
  --Text-Blue: hsl(228, 34%, 66%);
  --Text: hsl(0, 0%, 100%);
}

.container {
  width: 80%;
  margin: 0 auto;
}

/* Header Section */
header {
  background-color: var(--Top-BG);
  height: 16vh;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3em;
}

header h1 {
  font-size: 2.8em;
}

header p {
  font-size: 1.4em;
  font-weight: 700;
  color: var(--Text-Blue);
  margin-top: 0.2em;
}

#toggle {
  cursor: pointer;
  font-size: 1.3em;
  font-weight: 700;
  line-height: 30px;
  color: var(--Text-Blue);
}

#toggle input[type="checkbox"] {
  display: none;
}

#toggle .check {
  position: relative;
  display: block;
  width: 60px;
  height: 30px;
  background: var(--Toggle);
  border-radius: 15px;
  margin-left: 2em;
}

#toggle .check::before {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  background: var(--Main-BG);
  width: 22px;
  height: 22px;
  border-radius: 50%;
  transition: 0.5s;
}

#toggle input[type="checkbox"]:checked ~ .check {
  background: linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
}

#toggle input[type="checkbox"]:checked ~ .check::before {
  transform: translateX(30px);
}

/* Main Section */
main {
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  justify-content: space-between;
  position: relative;
}

main::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 125%;
  height: 15vh;
  background-color: var(--Top-BG);
  z-index: -1;
  transform: translateX(-10%);
}

main .card {
  height: 300px;
  background-color: var(--Card-BG);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1em;
}

main .card:hover {
  filter: contrast(0.85);
  cursor: pointer;
}

.card .title {
  display: flex;
  align-items: center;
}

.card .title img {
  width: 30px;
}

.card .title p {
  font-size: 1.2em;
  font-weight: 700;
  color: var(--Text-Blue);
  margin-left: 1em;
}

.card .numbers {
  margin: 2em 0;
}

.card .numbers h2 {
  font-size: 5em;
  color: var(--Text);
}

.card .numbers span {
  color: var(--Text-Blue);
  font-size: 1.2em;
  letter-spacing: 0.4em;
}

.card .updates {
  font-size: 1.2em;
  font-weight: 700;
}

.card .updates img {
  width: 20px;
  margin-right: 1em;
}

.up {
  color: var(--Lime-Green);
}

.down {
  color: var(--Bright-Red);
}

.card-f {
  border-top: 5px solid var(--Facebook);
}

.card-t {
  border-top: 5px solid var(--Twitter);
}

.card-i::before {
  content: "";
  position: relative;
  width: 100%;
  height: 5px;
  background: var(--Instagram);
  border-radius: 5px 5px 0 0;
  top: -22px;
}

.card-y {
  border-top: 5px solid var(--YouTube);
}

/* Overview Section */
#overview {
  width: 80%;
  margin: 0 auto;
}

.s-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  justify-content: space-between;
  align-items: center;
}

#overview h3 {
  font-size: 2.2em;
  color: var(--Text-Blue);
  margin: 0.6em 0;
}

.states {
  /* width: 250px; */
  height: 150px;
  background-color: var(--Card-BG);
  border-radius: 5px;
  margin-top: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  /* text-align: center; */
  grid-template-areas:
    "title img"
    "num update";
  padding: 2em;
}

.states:hover {
  filter: contrast(0.85);
  cursor: pointer;
}

.states h4 {
  grid: title;
  font-size: 1.3em;
  color: var(--Text-Blue);
  justify-self: flex-start;
}

.states .logo {
  width: 30px;
  justify-self: flex-end;
}

.states p {
  font-size: 3em;
  font-weight: 700;
  color: var(--Text);
  justify-self: flex-start;
}

.states span {
  font-size: 1.2em;
  font-weight: 700;
  justify-self: flex-end;
}

/* Footer Section */
.attribution {
  font-size: 12px;
  color: var(--Text);
  text-align: center;
  margin: 1.2em 3em;
}

.attribution a {
  color: hsl(228, 45%, 44%);
  text-decoration: none;
  font-weight: 700;
}

@media screen and (max-width: 1024px) {
  main {
    grid-template-columns: repeat(2, 1fr);
  }

  .s-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 420px) {
  .container {
    width: 90%;
    text-align: center;
  }

  /* Header Section */
  header {
    height: 30%;
  }

  header .container {
    flex-direction: column;
    align-items: flex-start;
  }

  header h1 {
    font-size: 2em;
  }

  header p {
    font-size: 1.2em;
    margin-top: 0.5em;
    padding-bottom: 1.8em;
    border-bottom: 1px solid var(--Toggle);
  }

  #toggle {
    margin: 1.2em auto;
  }

  #toggle .check {
    display: inline-block;
    vertical-align: middle;
  }

  main {
    grid-template-columns: 1fr;
  }

  .s-cards {
    grid-template-columns: 1fr;
  }
}
</style>
