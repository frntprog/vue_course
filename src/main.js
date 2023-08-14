import { createApp } from "vue";
import App from "./App.vue";
import directives from "@/directives";
import components from "@/components/UI/index";
import router from "@/router/router";
import store from "@/store";

const app = createApp(App);

console.log(components);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router).use(store).mount("#app");
