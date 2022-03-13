<script setup>
import FooterNav from "@/components/FooterNav.vue";
</script>

<template>
  <div id="bg-body">
    <main class="container">
      <section id="hero">
        <h1>10,000+ of our users love our products.</h1>
        <p>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </section>

      <section id="reviews">
        <div id="r1">
          <ul>
            <li v-for="n in 5" :key="n">
              <img src="./assets/icon-star.svg" alt="star" />
            </li>
          </ul>
          <p>Rated 5 Stars in Reviews</p>
        </div>
        <div id="r2">
          <ul>
            <li v-for="n in 5" :key="n">
              <img src="./assets/icon-star.svg" alt="star" />
            </li>
          </ul>
          <p>Rated 5 Stars in Report Guru</p>
        </div>
        <div id="r3">
          <ul>
            <li v-for="n in 5" :key="n">
              <img src="./assets/icon-star.svg" alt="star" />
            </li>
          </ul>
          <p>Rated 5 Stars in BestTech</p>
        </div>
      </section>

      <section id="testimonies">
        <div class="card" id="T1">
          <div class="profile">
            <img src="./assets/image-colton.jpg" alt="Colton's Profile Pic" />
            <div>
              <h4>Colton Smith</h4>
              <h5>Verified Buyer</h5>
            </div>
          </div>
          <p>
            "We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent!"
          </p>
        </div>
        <div class="card" id="T2">
          <div class="profile">
            <img src="./assets/image-irene.jpg" alt="Irene's Profile Pic" />
            <div>
              <h4>Irene Roberts</h4>
              <h5>Verified Buyer</h5>
            </div>
          </div>
          <p>
            "Customer service is always excellent and very quick turn around.
            Completely delighted with the simplicity of the purchase and the
            speed of delivery."
          </p>
        </div>
        <div class="card" id="T3">
          <div class="profile">
            <img src="./assets/image-anne.jpg" alt="Anne's Profile Pic" />
            <div>
              <h4>Anne Wallace</h4>
              <h5>Verified Buyer</h5>
            </div>
          </div>
          <p>
            "Put an order with this company and can only praise them for the
            very high standard. Will definitely use them again and recommend
            them to everyone!"
          </p>
        </div>
      </section>
    </main>
  </div>
  <FooterNav />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;700&display=swap");

#bg-body {
  --Very-Dark-Magenta: hsl(300, 43%, 22%);
  --Soft-Pink: hsl(333, 80%, 67%);
  --Dark-Grayish-Magenta: hsl(303, 10%, 53%);
  --Light-Grayish-Magenta: hsl(300, 24%, 96%);

  font-family: "Spartan", sans-serif;
  font-size: 15px;
  font-weight: 400;
  min-height: 100vh;
  background-color: #fff;
  background-image: url(./assets/bg-pattern-top-desktop.svg),
    url(./assets/bg-pattern-bottom-desktop.svg);
  background-position: top left, bottom right;
  background-repeat: no-repeat;
}

.container {
  padding: 8em;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem;
}

#hero h1 {
  color: var(--Very-Dark-Magenta);
  font-size: 3em;
  margin-bottom: 1rem;
}

#hero p {
  color: var(--Dark-Grayish-Magenta);
  line-height: 1.5em;
}

/* Reviews Section */
#reviews {
  width: 100%;
  display: flex;
  padding-left: 5em;
  margin: 1.2em 0;
  flex-direction: column;
  justify-content: start;
}

#reviews div {
  padding: 1.2em 2em 1.1em;
  margin-bottom: 1.2em;
  width: 75%;
  background-color: var(--Light-Grayish-Magenta);
  border-radius: 5px;
}

#reviews #r1 {
  align-self: flex-end;
  margin-right: 6em;
}

#reviews #r2 {
  align-self: flex-end;
  margin-right: 3em;
}

#reviews #r3 {
  align-self: flex-end;
}

#reviews li {
  list-style: none;
  display: inline;
  align-content: center;
  margin-right: 0.4em;
}

#reviews div ul {
  float: left;
}

#reviews div p {
  color: var(--Very-Dark-Magenta);
  font-weight: 700;
  margin-left: 10em;
}

/* Testimonies Section */
#testimonies {
  grid-column: 1/3;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.card {
  background-color: var(--Very-Dark-Magenta);
  padding: 2em;
  border-radius: 10px;
  margin-right: 2em;
  display: flex;
  flex-direction: column;
  height: 16em;
}

.card p {
  padding-top: 2em;
  color: var(--Light-Grayish-Magenta);
  font-weight: 400;
}

.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.profile img {
  border-radius: 50%;
  width: 16%;
  margin-right: 2em;
}

.profile h4 {
  color: white;
  font-weight: 700;
  margin-bottom: 0.5em;
}

.profile h5 {
  color: var(--Soft-Pink);
  font-weight: 500;
  /* margin-bottom: 0.5em; */
}

.card:last-of-type {
  margin-right: 0;
}

#T2 {
  margin-top: 2em;
}

#T3 {
  margin-top: 4em;
}

@media screen and (max-width: 880px) {
  /* Hero Section */
  body {
    background-image: url(./assets/bg-pattern-top-mobile.svg),
      url(./assets/bg-pattern-bottom-mobile.svg);
  }

  .container {
    padding: 5em 1.3em 1em;
    display: block;
  }

  #hero h1 {
    font-size: 2em;
    margin: 1em;
    text-align: center;
  }

  #hero p {
    text-align: center;
    margin-bottom: 2em;
  }

  /* Reviews Section */
  #reviews {
    width: 100%;
    display: block;
    padding-left: 0;
  }

  #reviews div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  #reviews li {
    margin-right: 0;
  }

  #reviews div ul {
    float: none;
    text-align: center;
    margin-bottom: 1em;
  }

  #reviews div p {
    margin-left: 0;
    text-align: center;
  }

  /* Testimonies Section */
  #testimonies {
    display: block;
    margin-top: 3em;
    margin-bottom: 2em;
  }

  .card {
    margin-right: 0;
    height: auto;
  }

  .card p {
    padding-top: 2em;
    line-height: 1.6em;
  }

  #T2,
  #T3 {
    margin-top: 2em;
  }
}
</style>
