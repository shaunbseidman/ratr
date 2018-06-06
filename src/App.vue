<template>
<div id="app">
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <router-link :to="{ name: 'splash'}">
      <a class="navbar-brand" href="#">RATR</a>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'signup'}">
            <a class="nav-link" href="#">Sign Up</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'login'}">
            <a class="nav-link" href="#">Log In</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'about'}">
            <a class="nav-link" href="#">About</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'contact'}">
            <a class="nav-link" href="#">Contact</a>
          </router-link>
        </li>
      </ul>
      <!-- <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form> -->
    </div>
  </nav>


  <router-view/>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'App',
  methods: {

    }
  
}
</script>

<style>
#app {}
</style>
