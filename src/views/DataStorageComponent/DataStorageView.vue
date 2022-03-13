<script setup>
import FooterNav from "../../components/FooterNav.vue";
</script>

<template>
  <div id="bg-body">
    <main>
      <section class="buttons">
        <h1><img src="./assets/logo.svg" alt="Logo" width="130" /></h1>
        <div class="row">
          <button>
            <img src="./assets/icon-document.svg" alt="Document" />
          </button>
          <button><img src="./assets/icon-folder.svg" alt="Folder" /></button>
          <button><img src="./assets/icon-upload.svg" alt="Upload" /></button>
        </div>
      </section>
      <section class="status">
        <h2>185 <span>GB LEFT</span></h2>
        <label>You’ve used <strong>815 GB</strong> of your storage</label>
        <div id="progress-bar">
          <div class="progress-value"></div>
        </div>
        <span class="min-storage">0 GB</span>
        <span class="max-storage">1000 GB</span>
      </section>
    </main>
  </div>
  <FooterNav />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

#bg-body {
  --Gradient: linear-gradient(to right, hsl(6, 100%, 80%), hsl(335, 100%, 65%));
  --Pale-Blue: hsl(243, 100%, 93%);
  --Grayish-Blue: hsl(229, 7%, 55%);
  --Dark-Blue: hsl(228, 56%, 26%);
  --Very-Dark-Blue: hsl(229, 57%, 11%);

  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 400;
  min-height: 100vh;
  background-color: var(--Very-Dark-Blue);
  background-image: url(./assets/bg-desktop.png);
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
}

main {
  height: 90vh;
  padding: 30vh 15vw;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}

section {
  background-color: var(--Dark-Blue);
  padding: 2em 3em;
}

.buttons {
  width: 34%;
  height: 200px;
  border-radius: 12px 100px 12px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

button {
  width: 48px;
  height: 48px;
  background-color: var(--Very-Dark-Blue);
  border: none;
  border-radius: 8px;
  margin-right: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

button:hover {
  background-color: var(--Pale-Blue);
}

.status {
  width: 58%;
  height: 155px;
  border-radius: 12px;
  position: relative;
}

.status h2 {
  position: absolute;
  right: 40px;
  top: -50px;
  width: 180px;
  height: 72px;
  background-color: #fff;
  border-radius: 12px;
  text-align: center;
  line-height: 72px;
  font-size: 2.8em;
}

.status h2::after {
  content: "";
  width: 20px;
  height: 20px;
  border-top: 20px solid white;
  border-bottom: 20px solid transparent;
  border-right: 20px solid white;
  border-left: 20px solid transparent;
  position: absolute;
  bottom: -20px;
  right: 0;
}

.status h2 span {
  font-size: 0.9rem;
  color: var(--Grayish-Blue);
  vertical-align: middle;
}

.status label,
.status span {
  color: var(--Pale-Blue);
}

.status label {
  display: block;
  margin: 1em 0;
}

#progress-bar {
  width: 100%;
  height: 20px;
  background-color: var(--Very-Dark-Blue);
  border-radius: 10px;
  padding: 3px;
}

.progress-value {
  width: 81.5%;
  height: 14px;
  background: var(--Gradient);
  border-radius: 10px;
  position: relative;
}

.progress-value::after {
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  border-radius: 50%;
  right: 2px;
  top: 2px;
  background-color: white;
}

.min-storage {
  float: left;
}

.max-storage {
  float: right;
}

.min-storage,
.max-storage {
  display: block;
  margin: 0.5em 0;
}

/* Footer Section */
footer {
  background-color: #000;
  height: 10vh;
}

.attribution {
  font-size: 14px;
  text-align: center;
  color: white;
  line-height: 10vh;
}

.attribution a {
  color: hsl(228, 100%, 75%);
  text-decoration: none;
  font-weight: 700;
}

/* Mobile Version */
@media screen and (max-width: 375px) {
  /* Main Section */
  body {
    background-image: url(./images/bg-mobile.png);
    background-position: center;
    background-size: cover;
  }

  main {
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .buttons {
    width: 90%;
    margin-bottom: 1em;
  }

  .status {
    width: 90%;
    height: 160px;
  }

  .status h2 {
    right: 25%;
    top: 80%;
  }

  .status h2::after {
    content: "";
    display: none;
  }

  .status label {
    text-align: center;
  }

  /* Footer Section */
  .attribution {
    font-size: 12px;
  }
}
</style>
