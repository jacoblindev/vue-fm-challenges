<script setup>
import FooterNav from "../../components/FooterNav.vue";
</script>

<template>
  <div class="bg-body">
    <main>
      <section id="join">
        <h1>Join our community</h1>
        <h2>30-day, hassle-free money back guarantee</h2>
        <p>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </section>

      <section id="signUp">
        <h3>Monthly Subscription</h3>
        <h4>&dollar;29 <span>per month</span></h4>
        <p>Full access for less than &dollar;1 a day</p>
        <button>Sign Up</button>
      </section>

      <section id="whyUs">
        <h3>Why Us</h3>
        <ul>
          <li>Tutorials by industry experts</li>
          <li>Peer &amp; expert code review</li>
          <li>Coding exercises</li>
          <li>Access to our GitHub repos</li>
          <li>Community forum</li>
          <li>Flashcard decks</li>
          <li>New videos every week</li>
        </ul>
      </section>
    </main>
  </div>
  <FooterNav />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap");

.bg-body {
  font-family: "Karla", sans-serif;
  font-size: 16px;

  --Cyan: hsl(179, 62%, 43%);
  --Bright-Yellow: hsl(71, 73%, 54%);
  --Light-Gray: hsl(204, 43%, 93%);
  --Grayish-Blue: hsl(218, 22%, 67%);

  background-color: var(--Light-Gray);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1.1fr;
  grid-template-areas:
    "top top"
    "left right";
  width: 50vw;
  /* margin: 15vh auto 1em; */
  border-radius: 10px;
  box-shadow: 0 15px 25px 0 hsla(218, 22%, 67%, 0.4);
}

/* Join Section */
#join {
  grid-area: top;
  padding: 3em 3em 3em 2em;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
}

#join h1 {
  color: var(--Cyan);
  font-size: 1.5em;
  margin-bottom: 1em;
}

#join h2 {
  color: var(--Bright-Yellow);
  font-size: 1.1em;
  margin-bottom: 0.8em;
}

#join p {
  color: var(--Grayish-Blue);
  font-size: 1em;
  line-height: 1.8em;
}

/* Sign Up Section */
#signUp {
  grid-area: left;
  padding: 2em;
  background-color: var(--Cyan);
  border-radius: 0 0 0 10px;
  color: #fff;
}

#signUp h3,
#whyUs h3 {
  font-size: 1rem;
  margin-bottom: 1em;
}

#signUp h4 {
  font-size: 2em;
  margin-bottom: 0.4em;
}

#signUp span {
  font-size: 0.85rem;
  font-weight: 400;
  vertical-align: middle;
  padding-left: 1em;
  opacity: 0.6;
}

#signUp p {
  font-size: 0.88em;
  font-weight: 400;
  color: var(--Light-Gray);
}

#signUp button {
  width: 100%;
  height: 2.8em;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  color: #fff;
  background-color: var(--Bright-Yellow);
  box-shadow: 0 5px 10px 0 hsl(179, 57%, 41%);
  margin-top: 2em;
}

/* Why Us Section */
#whyUs {
  grid-area: right;
  background-color: hsl(179, 60%, 48%);
  border-radius: 0 0 10px 0;
  color: #fff;
  padding: 2em;
}

#whyUs li {
  list-style: none;
  padding: 0.2rem 0;
  font-weight: 400;
  font-size: 0.8rem;
  color: var(--Light-Gray);
}

/* Mobile Version */
@media screen and (max-width: 415px) {
  main {
    grid-template-columns: 1fr;
    grid-template-rows: 1.2fr 1fr 1fr;
    grid-template-areas:
      "top"
      "left"
      "right";
    width: 85vw;
    margin: 10vh auto 1em;
  }

  #join {
    border-radius: 6px 6px 0 0;
    padding: 2em;
  }

  #signUp {
    border-radius: 0;
  }

  #whyUs {
    border-radius: 0 0 6px 6px;
  }
}
</style>
