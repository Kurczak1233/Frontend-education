import LearnVueButton from "./LearnVueButton/LearnVueButton.vue";
import Accordion from "./TailwindAccordion/Accordion.vue";
import "./index.css";
import "flowbite";
import "../node_modules/flowbite/dist/flowbite.js";

export default {
  install: (app, options) => {
    app.component("LearnVueButton", LearnVueButton);
    app.component("Accordion", Accordion);
  },
};
