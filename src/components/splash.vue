<template lang="html">
  <div class="splash">
    <div class="jumbotron">
    <h1 class="display-3">Welcome to RATR</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <router-link :to="{ name: 'about'}">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </router-link>
    </p>
  </div>

  </div>
</template>

<script>
export default {
  name: 'splash'
}
</script>

<style scoped lang="css">
</style>
