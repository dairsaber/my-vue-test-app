import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./route";

const app = createApp(App);

setupRouter(app);

app.mount("#app");
