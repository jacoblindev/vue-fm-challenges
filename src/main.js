import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithubSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { faExternalLinkSquare } from "@fortawesome/free-solid-svg-icons";

library.add(faGithubSquare, faInstagramSquare, faExternalLinkSquare);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
