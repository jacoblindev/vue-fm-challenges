<script setup>
import { ref } from "vue";
import FooterNav from "../../components/FooterNav.vue";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");

function submitForm() {
  alert("Cheers~!");
}
function checkField(e) {
  if (e.target.value === "") {
    e.target.setAttribute("required", true);
  }
}
</script>

<template>
  <div class="intro-sign-up">
    <main>
      <section id="hero">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <section id="CTA">
        <h2 id="title">
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </h2>
        <form id="app" @submit.prevent="submitForm">
          <label for="firstName" hidden>First Name</label>
          <input
            type="text"
            v-model="firstName"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            autocomplete="off"
            @blur="checkField"
          />
          <span class="error">
            <img src="./assets/icon-error.svg" alt="error icon" />
            <i>First Name cannot be empty</i>
          </span>
          <label for="lastName" hidden>Last Name</label>
          <input
            type="text"
            v-model="lastName"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            autocomplete="off"
            @blur="checkField"
          />
          <span class="error">
            <img src="./assets/icon-error.svg" alt="error icon" />
            <i>Last Name cannot be empty</i>
          </span>
          <label for="email" hidden>Email Address</label>
          <input
            type="email"
            v-model="email"
            name="email"
            id="email"
            placeholder="Email Address"
            autocomplete="off"
            @blur="checkField"
          />
          <span class="error">
            <img src="./assets/icon-error.svg" alt="error icon" />
            <i>Looks like this is not an email</i>
          </span>
          <label for="password" hidden>Password</label>
          <input
            type="password"
            v-model="password"
            name="password"
            id="password"
            placeholder="Password"
            autocomplete="off"
            @blur="checkField"
          />
          <span class="error">
            <img src="./assets/icon-error.svg" alt="error icon" />
            <i>Password cannot be empty</i>
          </span>
          <button type="submit">Claim your free trial</button>
          <span id="TS"
            >By clicking the button, you are agreeing to our
            <a href="#!">Terms and Services</a></span
          >
        </form>
      </section>
    </main>
  </div>
  <FooterNav />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

.intro-sign-up {
  font-family: "Poppins", sans-serif;
  font-size: 16px;

  --Primary-Red: hsl(0, 100%, 74%);
  --Primary-Green: hsl(154, 59%, 51%);
  --Accent-Blue: hsl(248, 32%, 49%);
  --Dark-Blue: hsl(249, 10%, 26%);
  --Grayish-Blue: hsl(246, 25%, 77%);

  background-image: url(./assets/bg-intro-desktop.png);
  background-color: var(--Primary-Red);
}

main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 90vh 10vh;
  grid-template-areas:
    "hero cta"
    "footer footer";
  align-items: center;
  width: 75vw;
  min-height: 100vh;
  margin: 0 auto;
}

/* Hero Section */
#hero {
  grid-area: hero;
  color: white;
}

#hero h1 {
  font-size: 2.7rem;
  line-height: 1.2em;
}

#hero p {
  font-size: 0.9rem;
  line-height: 1.8em;
  padding: 2em 2em 0 0;
}

/* CTA Section */
#CTA {
  grid-area: cta;
  color: white;
}

#CTA #title {
  display: block;
  width: 100%;
  padding: 1em;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  background-color: var(--Accent-Blue);
  border-radius: 10px;
  box-shadow: 0 8px 0 0 rgba(62, 60, 73, 0.35);
  margin-bottom: 1em;
}

#CTA form {
  width: 100%;
  padding: 2em;
  background-color: white;
  color: var(--Grayish-Blue);
  border-radius: 10px;
  box-shadow: 0 8px 0 0 rgba(62, 60, 73, 0.35);
  text-align: center;
}

#CTA input {
  width: 100%;
  line-height: 4em;
  margin-bottom: 1.6em;
  padding-left: 2em;
  border: 1px solid var(--Grayish-Blue);
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 700;
}

#CTA input::placeholder {
  color: var(--Grayish-Blue);
}

#CTA input:focus {
  outline: none;
  border-color: var(--Dark-Blue);
}

#CTA span.error {
  display: none;
  float: right;
  color: var(--Primary-Red);
  font-size: 0.7rem;
  position: relative;
  top: -16px;
}

#CTA .error img {
  position: absolute;
  right: 25px;
  top: -43px;
}

#CTA input:invalid {
  border: 2px solid var(--Primary-Red);
  color: var(--Primary-Red);
}

#CTA input:invalid + .error {
  display: unset;
}

#CTA button {
  width: 100%;
  line-height: 4.2em;
  border-radius: 5px;
  border: none;
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: white;
  background-color: var(--Primary-Green);
  box-shadow: 0 5px 0 0 hsl(154, 58%, 38%);
  margin-bottom: 1.2em;
}

#CTA button:hover {
  opacity: 0.7;
  cursor: pointer;
}

#CTA #TS {
  font-size: 0.65em;
}

#TS a {
  text-decoration: none;
  color: var(--Primary-Red);
  font-weight: 700;
  cursor: pointer;
}

@media screen and (max-width: 415px) {
  .intro-sign-up {
    background-image: url(./assets/bg-intro-mobile.png);
  }

  main {
    width: 90vw;
    padding-bottom: 2rem;
    text-align: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1.2fr 1.5fr;
    grid-template-areas:
      "hero"
      "cta";
  }

  #hero h1 {
    font-size: 2rem;
    line-height: 1.2em;
  }

  #hero p {
    padding: 2em 2em 0 2em;
  }

  #CTA #title {
    padding: 1em 4em 1em 4em;
  }

  #CTA #TS {
    display: block;
    margin: 0 auto;
    width: 80%;
  }

  .attribution {
    padding: 2em;
  }
}
</style>
