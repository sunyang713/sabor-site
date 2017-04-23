<template>
  <div>

    <!-- NAVBAR
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <nav class="navbar navbar-light navbar-toggleable-md bg-faded">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link class="navbar-brand font-weight-bold" to="/">Sabor</router-link>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <router-link v-for="route in routes" v-if="route.showInNav"
              tag="li"
              :key="route.path"
              :to="route.path"
              :exact="route.path === '/'"
              class="nav-item">
              <a class="nav-link">{{ route.name }}</a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>


    <!-- PAGE VIEW
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <router-view></router-view>


    <!-- FOOTER
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <footer class="footer bg-inverse text-white py-5">
      <div class="container">
        <div class="copyright py-4">
          <div class="float-md-left">
            <p>&copy; Copyright 2017 Sabor. All Rights Reserved.</p>
          </div>
          <div class="float-md-right">
            <a href="https://www.facebook.com/cusabor">
              <i class="fa fa-lg fa-fw fade-on-hover fa-facebook"></i>
            </a>
            <a href="https://twitter.com/sabortweets">
              <i class="fa fa-lg fa-fw fade-on-hover fa-twitter"></i>
            </a>
            <a href="https://instagram.com/cusabor">
              <i class="fa fa-lg fa-fw fade-on-hover fa-instagram "></i>
            </a>
            <a href="https://github.com/sunyang713/sabor-website">
              <i class="fa fa-lg fa-fw fade-on-hover fa-github"></i>
            </a>
            <span>Created by <a href="https://www.linkedin.com/in/jonathansun0/">Jonathan Sun</a></span>
          </div>
        </div>
      </div>
    </footer>

  </div>
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

<style>

/* GLOBAL STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
html {
  position: relative;
  min-height: 100%;
}

@media (max-width: 576px) {
  html {
    font-size: 14px;
  }
}

body {
  /* Margin bottom by footer height */
  margin-bottom: 160px;
}

@media (max-width: 768px) {
  body {
    /* Margin bottom by footer height */
    margin-bottom: 203px;
  }
}


.formatted-text {
  white-space: pre-wrap;
}

.parallax-image {
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-color: transparent;
  height: 20rem;
}

.btn-transparent {
  color: inherit;
  background-color: transparent;
  border-color: inherit;
}

.btn-transparent:hover {
  color: inherit;
  filter: invert(15%);
}

.fade-on-hover {
  opacity: 1;
  transition: opacity .25s ease-in-out;
}

.fade-on-hover:hover {
  opacity: 0.5;
}


/* Make the bootstrap display headings smaller for smaller screens */
@media (max-width: 991px) {
  .display-1 {
    font-size: 4rem;
  }
  .display-2 {
    font-size: 3.5rem;
  }
  .display-3 {
    font-size: 3rem;
  }
  .display-4 {
    font-size: 2.5rem;
  }
}

/* Vuejs css fade transition */
.v-fade-enter-active, .v-fade-leave-active {
  transition: opacity 1s;
}
.v-fade-enter, .v-fade-leave-to {
  opacity: 0;
}

/* Vuejs css fade transition */
.v-fade-overlay-enter-active, .v-fade-overlay-leave-active {
  transition: opacity 2s;
}
.v-fade-overlay-enter, .v-fade-overlay-leave-to {
  opacity: 0;
  position: absolute;
}


/* NAVBAR
–––––––––––––––––––––––––––––––––––––––––––––––––– */

/* Un-constrict the sides of the navbar in smaller screens */
@media (max-width: 576px) {
  .navbar .container {
    margin-left: 0;
    margin-right: 0;
  }
}


/* FOOTER
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  /*height: 60px;*/
}

.footer .copyright {
  /* for when there's links to add above */
  /*border-top: .05rem solid #e5e5e5;*/
}

.footer a {
  color: white;
}

</style>
