<template>
  <div>
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">Sabor in Action</h1>
        <p class="lead text-muted">See our most recent pictures. Stay up to date by following us on Facebook or Instagram!</p>
        <p>
          <a href="https://www.facebook.com/cusabor/photos">Facebook</a>
          &bull;
          <a href="https://instagram.com/cusabor">Instagram</a>          
        </p>
      </div>
    </section>

    <div class="album text-muted">
      <div class="container">

        <div class="card-columns" v-for="pictureSet in pictures" :key="JSON.stringify(pictureSet)">
          <div class="card"
            v-for="picture in pictureSet"
            :key="picture.id">
            <a :href="picture.url">
              <img class="card-img-top img-fluid" :src="picture.src" :alt="picture.title">
            </a>
            <div class="card-block">
              <p class="card-text">{{ picture.title }}</p>
              <p class="card-text"><small class="text-muted">{{ picture.time }}</small></p>
            </div><!-- /.card-block -->
          </div><!-- /.card -->
        </div><!-- /.card-columns -->

        <div class="text-center">
          <button class="btn btn-secondary" type="button" href="#" @click="loadMorePictures">load more</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import fbapi from 'utils/fbapi'

export default {
  data () {
    return {
      pictures: [],
      nextUrl: null
    }
  }, // end 'data()'

  methods: {
    loadMorePictures () {
      fetch(this.nextUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(
        response => response.json()
      ).then(
        response => {
          var pics = []
          response.data.forEach(picture => {
            pics.push({
              title: picture.name,
              time: moment(picture.created_time).calendar(),
              description: moment(picture.created_time).calendar(),
              src: picture.source,
              url: `https://www.facebook.com/${ picture.id }`
            })
          })
          this.pictures.push(pics)
          this.nextUrl = response.paging.next
        }
      )
    } // end 'loadMorePictures()'
  }, // end 'methods'

  mounted () {
    fbapi('/cusabor/photos', {
      type: 'uploaded',
      fields: 'id,created_time,name,source',
      limit: '9'
    }, response => {
      var pics = response.data.map(picture => ({
        title: picture.name,
        time: moment(picture.created_time).calendar(),
        description: moment(picture.created_time).calendar(),
        src: picture.source,
        url: `https://www.facebook.com/${ picture.id }`
      }))
      this.pictures.push(pics)
      this.nextUrl = response.paging.next
    })

  } // end 'mounted()'
}
</script>

<style scoped>

.navbar {
  margin-bottom: 0;
}

.jumbotron {
  padding-top: 6rem;
  padding-bottom: 6rem;
  margin-bottom: 0;
  background-color: #fff;
}

.jumbotron-heading {
  font-weight: 300;
}

.jumbotron .container {
  max-width: 40rem;
}

.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.album .btn:hover {
  cursor: pointer;
}

.album .card-columns + .card-columns {
  border-top: .05rem solid #e5e5e5;
  padding-top: 1.1rem;
}

</style>
