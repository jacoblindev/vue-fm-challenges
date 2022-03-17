import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {
  faExternalLinkSquare,
  faHand,
  faHandBackFist,
  faHandScissors,
  faHandSpock,
  faHandLizard,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faGithub,
  faExternalLinkSquare,
  faHand,
  faHandBackFist,
  faHandScissors,
  faHandSpock,
  faHandLizard,
  faQuestion
);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
