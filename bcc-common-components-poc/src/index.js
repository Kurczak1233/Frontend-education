import LearnVueButton from "./LearnVueButton/LearnVueButton.vue";
import SecondButton from "./LearnVueButton/SecondButton.vue";
import TailwindAccordion from "./LearnVueButton/TailwindAccordion.vue";
import SimpleButtonWithTailwind from "./LearnVueButton/SimpleButtonWithTailwind.vue";
import "./index.css";
import "flowbite";
import "../node_modules/flowbite/dist/flowbite.js";

export default {
  install: (app, options) => {
    app
      .component("SecondButton", SecondButton)
      .component("LearnVueButton", LearnVueButton)
      .component("TailwindAccordion", TailwindAccordion)
      .component("SimpleButtonWithTailwind", SimpleButtonWithTailwind);
  },
};
