<template>
  <div id="about-page">
    <div class="container">
      <h4>Sabor</h4>
      <p class="lead formatted-text">{{ clubDescription }}</p>
    </div>
  </div>
</template>

<script>
import fbapi from 'utils/fbapi'

export default {
  data () {
    return {
      clubDescription: 'Sabor is a dancing club'
    }
  },
  created () {
    fbapi('cusabor', {
      fields: 'description'
    }, response => {
      console.log(response)
      this.clubDescription = response.description
    })
    // get prof pic too?
  }
}
</script>

<style scoped>

</style>
