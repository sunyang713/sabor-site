<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
    <sabor-footer></sabor-footer>
  </div>
</template>

<script>
import Navbar from 'components/Navbar'
import SaborFooter from 'components/Footer'

export default {
  components: {
    Navbar,
    SaborFooter
  }
}
</script>

<style>

/* GLOBAL STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */

html {
  position: relative;
  min-height: 100%;
  font-size: 14px;
}

@media (min-width: 576px) {
  html {
    font-size: 16px;
  }
}

body {
  /* Margin bottom by footer height */
  /*margin-bottom: 60px;*/
}

.sabor-formatted-text {
  white-space: pre-wrap;
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
  transition: opacity 1s
}
.v-fade-enter, .v-fade-leave-to {
  opacity: 0
}


</style>
