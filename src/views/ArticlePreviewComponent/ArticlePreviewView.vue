<script setup>
import { ref, computed } from "vue";
import FooterNav from "@/components/FooterNav.vue";

const showShareBtns = ref(false);
const shareBtns = computed(() => (showShareBtns.value ? "flex" : "none"));
</script>

<template>
  <div id="bg-body">
    <main>
      <div class="card">
        <div class="drawer"></div>
        <article>
          <h2>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div class="profile">
            <div class="pro-avatar">
              <img
                src="./assets/avatar-michelle.jpg"
                alt="Michelle's Profile Pic"
              />
            </div>
            <div class="pro-name">
              <h3>Michelle Appleton</h3>
              <h4>28 Jun 2020</h4>
            </div>
            <button
              id="share"
              title="Share"
              @click="showShareBtns = !showShareBtns"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                <path
                  fill="currentColor"
                  d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                />
              </svg>
            </button>
          </div>
          <div class="share-btn">
            <span>SHARE</span>
            <button>
              <img src="./assets/icon-facebook.svg" alt="facebook" />
            </button>
            <button>
              <img src="./assets/icon-pinterest.svg" alt="pinterest" />
            </button>
            <button>
              <img src="./assets/icon-twitter.svg" alt="twitter" />
            </button>
          </div>
        </article>
      </div>
    </main>
  </div>
  <FooterNav />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap");

#bg-body {
  --Very-Dark-Grayish-Blue: #48556a;
  --Desaturated-Dark-Blue: #6d7f97;
  --Grayish-Blue: #9eafc2;
  --Light-Grayish-Blue: #ecf2f8;

  font-family: "Manrope", sans-serif;
  font-size: 13px;
  font-weight: 500;
  background-color: var(--Light-Grayish-Blue);
  min-height: 100vh;
}

/* Main Area */
main {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 50%;
  height: 35%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: start;
  border-radius: 10px;
  box-shadow: 0px 15px 60px -15px var(--Grayish-Blue);
}

.drawer {
  width: 36%;
  border-radius: 10px 0 0 10px;
  background-image: url(./assets/drawers.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

article {
  width: 64%;
  color: var(--Desaturated-Dark-Blue);
  padding: 2em 3.5em;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

article h2,
article h3 {
  color: var(--Very-Dark-Grayish-Blue);
  font-weight: 700;
}
.profile {
  margin-top: 0.5rem;
}
.pro-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  float: left;
  margin-right: 1.2em;
}

.pro-name {
  float: left;
}

.pro-name h4 {
  font-weight: 500;
}

#share {
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  background-color: var(--Light-Grayish-Blue);
  color: var(--Very-Dark-Grayish-Blue);
  fill: currentColor;
  float: right;
}

#share:hover {
  cursor: pointer;
  background-color: var(--Very-Dark-Grayish-Blue);
  color: var(--Light-Grayish-Blue);
  fill: currentColor;
}

#share:focus {
  outline: unset;
}

/* Share Section */
.share-btn {
  display: v-bind(shareBtns);
  position: absolute;
  right: -5.1em;
  bottom: 6.2em;
  background-color: var(--Very-Dark-Grayish-Blue);
  border-radius: 10px;
  width: 20em;
  height: 4em;
  padding: 0 3em;
  letter-spacing: 0.3em;
  text-align: center;
  line-height: 4em;
  justify-content: space-around;
}

.share-btn::after {
  content: "";
  position: absolute;
  bottom: -25px;
  width: 25px;
  height: 25px;
  border-top: 15px solid var(--Very-Dark-Grayish-Blue);
  border-right: 15px solid transparent;
  border-left: 15px solid transparent;
  border-bottom: 15px solid transparent;
}

.share-btn button {
  background-color: var(--Very-Dark-Grayish-Blue);
  border: none;
  vertical-align: middle;
}

.share-btn span {
  color: var(--Grayish-Blue);
}

/* Mobile Version */
@media screen and (max-width: 480px) {
  /* Main Area */
  main {
    height: 92vh;
  }

  .card {
    width: 90%;
    height: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .drawer {
    width: 100%;
    height: 45%;
    border-radius: 10px 10px 0 0;
    background-size: cover;
  }

  article {
    width: 100%;
    height: 60%;
    padding: 2em 2.5em 1em;
  }

  article h2 {
    font-size: 1.25em;
  }

  article p {
    font-size: 1.06em;
    margin-bottom: 1em;
  }

  #share {
    width: 35px;
    height: 35px;
    float: right;
    position: relative;
    z-index: 9;
    margin-top: 0.2em;
  }

  #share:focus {
    outline: unset;
    background-color: var(--Desaturated-Dark-Blue);
    color: var(--Light-Grayish-Blue);
    fill: currentColor;
  }

  /* Share Section */
  .share-btn {
    right: 0;
    bottom: 0;
    border-radius: 0 0 10px 10px;
    width: 100%;
    height: 5em;
    padding: 0 2.5em;
    /* letter-spacing: 0.3em; */
    /* text-align: center; */
    line-height: 5em;
    justify-content: flex-start;
    align-items: center;
  }

  .share-btn::after {
    display: none;
  }

  .share-btn button {
    margin: auto 1em;
  }
}
</style>
