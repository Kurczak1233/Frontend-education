<template>
  <body>
    <b-container class="col-10 col-md-8 col-xl-5 mr-auto ml-auto margin10 background-bluish" fluid>
            Nie będziemy testować writingu.
              <div id="app">
    <h2>Create User Form</h2>
    <UserForm/>

    <h2>Edit User Form</h2>
    <UserForm :id="1"/>
  </div>
    </b-container>
  </body>
</template>



<script>
// import { required } from "vuelidate/lib/validators";

import FormBuilder from "../FormDirector.js";
import FormDirector from "../FormDirector.js";

// import UserForm from "./components/UserForm.vue";
// import UserProvider from "./components/UserProvider.vue";
// import FormInput from "./components/FormInput.vue";
// import FormTextarea from "./components/FormTextarea.vue";

export default {
  name: "App",
  components: {
    // UserForm
    // UserForm: new FormBuilder()
    //   .withProvider(UserProvider)
    //   .addField({
    //     component: FormInput,
    //     label: "Name",
    //     name: "name",
    //     options: {
    //       attrs: {
    //         placeholder: "Your name"
    //       }
    //     },
    //     validation: {
    //       required
    //     }
    //   })
    //   .addField({
    //     component: FormTextarea,
    //     label: "Description",
    //     name: "description",
    //     options: {
    //       attrs: {
    //         placeholder: "About you"
    //       }
    //     }
    //   })
    //   .build()
    UserForm: new FormDirector(new FormBuilder()).makeUserForm()
  }
};
</script>

<style >
body
{
  background-color: rgb(217,218,211);
  width: 100%;
  height:100%;
}
.background-bluish
{
  background-color: rgb(105, 208, 245);
  border-radius: 20px;
}
.margin10
{
  margin-top: 10%;
}
.text-size-big
{
  font-size: 2rem;
}
#project-logo{
  height: 80px;
}
</style>
