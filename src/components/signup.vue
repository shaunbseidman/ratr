<template lang="html">
  <div class="signUp">
    <div class="loadingImage" >
      <BallTrianglePathLoader color="#000000" size="20px"></BallTrianglePathLoader>
    </div>
    <div class="info" v-cloak>
      <router-link :to="{name: 'HelloWorld'}">
        <button type="button" class="btn btn-primary">Back</button>
      </router-link>
      <h1>this is a sign up page</h1>
    </div>


  </div>
</template>

<script>
export default {
  name: 'signup',
  data() {
    return {}
  },
  methods: {
    

  },

  // hideAlert() {
  // document.querySelector('.loadingImage').style.display = 'none';}
}
</script>

<style scoped>
.loadingImage {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.loadingImage {
  -moz-animation: cssAnimation 0s ease-in 2s forwards;
  /* Firefox */
  -webkit-animation: cssAnimation 0s ease-in 2s forwards;
  /* Safari and Chrome */
  -o-animation: cssAnimation 0s ease-in 2s forwards;
  /* Opera */
  animation: cssAnimation 0s ease-in 2s forwards;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

@keyframes cssAnimation {
  to {
    width: 0;
    height: 0;
    overflow: hidden;
  }
}

@-webkit-keyframes cssAnimation {
  to {
    width: 0;
    height: 0;
    visibility: hidden;
  }
}
</style>
