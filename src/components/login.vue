<template lang="html">
  <div class="login">
    <button @click="login()">Login</button>
    <button @click="register()">Register</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data (){
    return{}
  },
  methods: {
     login: function () {
       this.$auth.login({ email, password }).then(function () {
         // Execute application logic after successful login
       })
     },

     register: function () {
       this.$auth.register({ name, email, password }).then(function () {
         // Execute application logic after successful registration
       })
     }
   }
}
</script>

<style scoped lang="css">
</style>
