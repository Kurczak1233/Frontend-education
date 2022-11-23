import LearnVueButton from "./LearnVueButton/LearnVueButton.vue";
import SecondButton from "./LearnVueButton/SecondButton.vue";
import "./index.css";
import "flowbite";
import "../node_modules/flowbite/dist/flowbite.js";

export default {
  install: (app, options) => {
    app
      .component("SecondButton", SecondButton)
      .component("LearnVueButton", LearnVueButton);
  },
};
