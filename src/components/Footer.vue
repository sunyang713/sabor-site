<template>
  <footer class="footer bg-inverse text-white py-5">
    <div class="container">
      <div class="copyright py-4">
        <div class="float-md-left">
          <p>&copy; Copyright 2017 Sabor. All Rights Reserved.</p>
        </div>
        <div class="float-md-right">
          <a href="https://fb.me/cusabor">
            <i class="fa fa-lg fa-fw fade fa-facebook"></i>
          </a>
          <a href="https://twitter.com/sabortweets">
            <i class="fa fa-lg fa-fw fade fa-twitter"></i>
          </a>
          <a href="https://instagr.am/cusabor">
            <i class="fa fa-lg fa-fw fade fa-instagram "></i>
          </a>
          <a href="https://github.com/sunyang713/sabor-website">
            <i class="fa fa-lg fa-fw fade fa-github"></i>
          </a>
          <span>Created by <a href="https://www.linkedin.com/in/jonathansun0/" class="fade">Jonathan Sun</a></span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>
.footer {

}

.footer .copyright {
  /* for when there's links to add above */
  /*border-top: .05rem solid #e5e5e5;*/
}

.footer .fade {
  opacity: 1;
  transition: opacity .25s ease-in-out;
}

.footer .fade:hover {
  opacity: 0.5;
  text-decoration: none;
}

.footer a {
  color: white;
}

</style>
