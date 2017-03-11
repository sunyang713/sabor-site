<template>
  <nav class="navbar navbar-light navbar-toggleable-md bg-faded">
    <div class="container">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="/">Sabor</a>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <router-link v-for="route in routes" v-if="route.showInNav"
            tag="li"
            :key="route.path"
            :to="route.path"
            :exact="route.path=='/'"
            class="nav-item">
            <a class="nav-link">{{ route.name }}</a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { routes } from 'router'

export default {
  data () {
    return {
      routes
    }
  }
}
</script>

<style scoped>

/* Un-constrict the sides of the navbar in smaller screens */
@media (max-width: 991px) {
  .navbar .container {
    margin-left: 0;
    margin-right: 0;
  }
}

</style>
