<script setup>
import { reactive } from "vue";
import FooterNav from "../../components/FooterNav.vue";
import AccordinItem from "./components/AccordinItem.vue";

const faqs = reactive([
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    isOpen: true,
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
    isOpen: false,
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    isOpen: false,
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
    isOpen: false,
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    isOpen: false,
  },
]);

function showAnswer(index) {
  faqs.map((e, i) =>
    i == index ? (e.isOpen = !e.isOpen) : (e.isOpen = false)
  );
}
</script>

<template>
  <main>
    <div class="faq-card">
      <div class="card-img">
        <img
          src="./assets/illustration-woman-online-mobile.svg"
          alt="Woman online"
        />
      </div>
      <div class="card-accordion">
        <h1>FAQ</h1>
        <ul>
          <li
            v-for="(faq, index) in faqs"
            :key="index"
            @click="showAnswer(index)"
          >
            <AccordinItem
              :question="faq.question"
              :answer="faq.answer"
              :is-open="faq.isOpen"
            />
          </li>
        </ul>
      </div>
    </div>
  </main>
  <FooterNav />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");

main {
  min-height: 100vh;
  background-image: linear-gradient(hsl(273, 75%, 66%), hsl(240, 73%, 65%));
  display: flex;
  align-items: center;
  justify-content: center;
}
.faq-card {
  font-family: "Kumbh Sans", sans-serif;
  background-color: white;
  border-radius: 30px;
  max-width: calc(1440px / 1.4);
  display: flex;
}
.card-img {
  position: relative;
  width: 472px;
  display: flex;
  align-items: center;
  background-image: url(./assets/bg-pattern-desktop.svg);
  background-repeat: no-repeat;
  background-position: center right 0;
}
.card-img img {
  position: absolute;
  transform: scale(2) translateX(20%);
}
.card-accordion {
  padding: 5rem;
  width: 600px;
}
.card-accordion > h1 {
  color: hsl(238, 29%, 16%);
}
li {
  cursor: pointer;
  list-style: none;
  padding: 1rem 0;
  border-bottom: 1px solid hsl(240, 5%, 91%);
}

@media screen and (max-width: 1024px) {
  .faq-card {
    width: 85vw;
    flex-direction: column;
    margin: 8em 0 4em;
  }
  .card-img {
    width: unset;
    height: 104px; /** Background image's height */
    align-items: unset;
    justify-content: center;
    background-image: url(./assets/bg-pattern-mobile.svg);
    background-position: center;
  }
  .card-img img {
    position: absolute;
    transform: translateY(-104px);
  }
  .card-accordion {
    padding: 1.5rem 1.5rem 3rem;
    width: 100%;
  }
  .card-accordion > h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  li {
    border-bottom: 1px solid hsl(240, 5%, 91%);
  }
}
</style>
