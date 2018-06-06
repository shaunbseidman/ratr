<template lang="html">
  <div class="login">
    <button v-on:click="itWorks" type="button" name="button">login</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data (){
    return{}
  },
  methods: {
    itWorks(){
      alert('fart')
    }
  }
}
</script>

<style scoped lang="css">
</style>
