//  import { required } from "vuelidate/lib/validators";

import UserProvider from "../builders/ComponentsForBuilder/UserProvider.vue";

import FormInput from "../builders/ComponentsForBuilder/FormInput.vue";
import FormTextarea from "../builders/ComponentsForBuilder/FormTexxtAreae.vue";

export default class FormDirector {
  constructor(builder) {
    this.builder = builder;
  }

  makeUserForm() {
    return this.builder
      .withProvider(UserProvider)
      .addField({
        component: FormInput,
        label: "Name",
        name: "name",
        options: {
          attrs: {
            placeholder: "Your name"
          }
         } // },
        // validation: {
        //   required
        // }
      })
      .addField({
        component: FormTextarea,
        label: "Description",
        name: "description",
        options: {
          attrs: {
            placeholder: "About you"
          }
        }
      })
      .build();
  }
}