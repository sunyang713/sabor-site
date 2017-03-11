<template>

  <div id="home-page">

    <!-- HERO
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="hero">
      <div class="hero-img-wrapper">
        <transition name="v-fade">
          <img
            :src="cHeroImage"
            :key="`hero-img-${ heroImageIndex }`"
            class="hero-img img-fluid">
        </transition>
      </div>
      <div class="container hero-overlay text-center">
        <img src="~assets/images/home/logo.png" class="hero-logo-img align-middle">
      </div><!-- /.container .hero-overlay -->
    </div><!-- /.hero -->

    <!-- BLURB
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <section class="jumbotron blurb">
      <div class="container text-center">
        <h2>Columbia's Hottest Dancers</h2>
        <p class="lead">{{ this.blurb }}</p>
      </div><!-- /.container-->
    </section><!-- /.blurb -->

    <!-- LATEST EVENT
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <section v-if="cEvent" class="event">
      <div class="container">
        <div class="card">

          <div class="card-header text-center ">New!</div><!-- to create urgency -->

          <div class="card-img-overlay-wrapper">
            <img class="card-img img-fluid" :src="cEvent.imgsrc" alt="Event image">
            <div class="card-img-overlay card-block mx-auto">
              <h1 class="card-title display-4">{{ cEvent.name }}</h1>
            </div><!-- /.card-img-overlay -->
          </div><!-- /.card-img-overlay-wrapper -->

          <div class="card-block mx-auto">
            <h6 class="card-subtitle my-2 text-muted">{{ cEvent.startDate }}, {{ cEvent.startTime }}&nbsp;&ndash; {{ cEvent.endTime }}</h6>
            <h6 class="card-subtitle my-2 text-muted">
              <a :href="cEvent.locationLink">{{ cEvent.location }}</a>
            </h6>
            <hr class="my-4">
            <p class="card-text lead sabor-formatted-text text-justify">{{ cEvent.description }}</p>
            <div class="text-center">
              <a :href="cEvent.link" class="btn btn-info">Learn more</a>
              <router-link to="/events" class="btn btn-secondary">More events</router-link>
            </div><!-- .text-center -->
          </div><!-- /.card-block -->

          <div class="card-footer text-muted text-center">
            {{ cEvent.relativeTimeMessage }}
          </div><!-- /.card-footer -->

        </div><!-- /.card -->
      </div><!-- /.container -->
    </section><!-- /.event -->

    <!-- DANCE STYLES
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <section class="dance-styles">
      <div class="container text-white">
        <h1 class="display-4 text-center">Sabor's Styles</h1>
        <hr class="my-4">
        <div class="row mb-md-5">
          <div class="col-md-4 dance-style">
            <i class="sprite sprite-salsa d-inline-block"></i>
            <h2 class="font-weight-normal d-inline-block">Salsa</h2>
            <p class="text-white">Where our technical talent shines brightest. Stylish and fun.</p>
          </div><!-- /.col-md-4 -->
          <div class="col-md-4 dance-style">
            <i class="sprite sprite-bachata d-inline-block"></i>
            <h2 class="font-weight-normal d-inline-block">Bachata</h2>
            <p class="text-white">Where our sensuality unfurls and exposes itself. Sexy and sensitive.</p>
          </div><!-- /.col-md-4 -->
          <div class="col-md-4 dance-style">
            <i class="sprite sprite-merengue d-inline-block"></i>
            <h2 class="font-weight-normal d-inline-block">Merengue</h2>
            <p class="text-white">Where our pace picks up and our energy heats up. Exciting and spicy.</p>
          </div><!-- /.col-md-4 -->
        </div><!-- /.row -->
        <div class="row mb-md-5">
          <div class="col-md-4 dance-style">
            <i class="sprite sprite-dancehall d-inline-block"></i>
            <h2 class="font-weight-normal d-inline-block">Dancehall</h2>
            <p>Where our bodies tell you what we want in the dark. Fierce and hot.</p>
          </div><!-- /.col-md-4 -->
          <div class="col-md-4 dance-style">
            <i class="sprite sprite-hiphop d-inline-block"></i>
            <h2 class="font-weight-normal d-inline-block">Hip-hop</h2>
            <p>Where our training meets our flair. Strong and precise.</p>
          </div><!-- /.col-md-4 -->
          <div class="col-md-4 dance-style">
            <i class="sprite sprite-more d-inline-block"></i>
            <h2 class="font-weight-normal d-inline-block">...and much more</h2>
            <p>Our skills include Caribbean, African, and other relatives of Latin dance.</p>
          </div><!-- /.col-md-4 -->
        </div><!-- /.row -->
        <router-link to="dance-styles">Come and learn more about our dances &rsaquo;</router-link>
      </div><!-- /.container -->
    </section><!-- /.dance-styles -->

    <!-- LATEST MEDIA
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <section v-if="cMedia" class="media">
      <div class="container text-center">
        <h1 class="display-4">Latest from Sabor</h1>
        <hr class="my-4">
        <div class="row">
          <div v-if="cMedia.image1" class="col-lg-4">
            <img class="rounded-circle" :src="cMedia.image1.thumbnail" alt="Media image thumbnail" width="140" height="140">
            <h2>{{ cMedia.image1.createdTime }}</h2>
            <p class="sabor-formatted-text">{{ cMedia.image1.description }}</p>
            <a
              class="btn btn-secondary"
              type="button"
              role="button"
              data-toggle="modal"
              data-target="#media-modal"
              @click="mediaModalItem = cMedia.image1">
              View &raquo;
            </a>
          </div><!-- /.col-lg-4 -->
          <div v-if="cMedia.video" class="col-lg-4">
            <img class="rounded-circle" :src="cMedia.video.thumbnail" alt="media video thumbnail" width="140" height="140">
            <h2>{{ cMedia.video.createdTime }}</h2>
            <p>{{ cMedia.video.description }}</p>
            <a
              class="btn btn-secondary"
              type="button"
              role="button"
              data-toggle="modal"
              data-target="#media-modal"
              @click="mediaModalItem = cMedia.video">
              View &raquo;
            </a>
          </div><!-- /.col-lg-4 -->
          <div v-if="cMedia.image2" class="col-lg-4">
            <img class="rounded-circle" :src="cMedia.image2.thumbnail" alt="media image thumbnail" width="140" height="140">
            <h2>{{ cMedia.image2.createdTime }}</h2>
            <p>{{ cMedia.image2.description }}</p>
            <a
              class="btn btn-secondary"
              type="button"
              role="button"
              data-toggle="modal"
              data-target="#media-modal"
              @click="mediaModalItem = cMedia.image2">
              View &raquo;
            </a>
          </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->
        <router-link to="media">Check out more recent media here &rsaquo;</router-link>
      </div><!-- /.container -->
    </section><!-- /.media -->

    <!-- RELEVE
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <section class="releve bg-warning text-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-7">
            <h2>Relevé &middot; Our award-winning outreach</h2>
            <p>Every Spring, we host a three-day program for underserved but ambitious high school students. We provide workshops in both the performing arts and college admissions amidst a weekend of dancing.</p>
            <router-link to="releve" class="btn btn-transparent">Learn more or apply for Relevé &rsaquo;</router-link>
          </div><!-- /.col-md-7 -->
          <div class="col-md-5">
            <img class="img-fluid" src="~assets/images/home/kings-crown-award.png">
          </div><!-- /.col-md-5 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section><!-- /.dance-styles -->

    <!-- NEWSLETTER SUBSCRIPTION
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <section class="newsletter-subscription bg-info">
      <div class="container">
        <div class="card text-center">
          <div class="card-block my-4">
            <h4 class="card-title display-4">Want a taste?</h4>
            <h6 class="card-subtitle my-2 text-muted">Subscribe to our newsletter. No spam, promised.</h6>
            <hr class="my-4">

            <form action="https://lists.columbia.edu/mailman/subscribe/saborgbody" method="POST">
              <div class="row justify-content-md-center">
                <div class="form-group col-md">
                  <label for="newsletter-subscription-input-name" class="sr-only">Name</label>
                  <div class="input-group">
                    <div class="input-group-addon"><i class="fa fa-user-o fa-fw"></i></div>
                    <input
                      id="newsletter-subscription-input-name"
                      name="fullname"
                      type="text"
                      class="form-control"
                      aria-describedby="newsletter-subscription-help-message"
                      placeholder="Name"
                      v-model="newsletterSubscription.name"
                      @focus="setNewsletterSubscriptionHelpMessage('Optional.')"
                      @blur="clearNewsletterSubscriptionHelpMessage">
                  </div><!-- /.input-group -->
                </div><!-- /.form-group .col -->
                <div class="form-group col-md">
                  <label for="newsletter-subscription-input-email" class="sr-only">Email Address</label>
                  <div class="input-group">
                    <div class="input-group-addon"><i class="fa fa-envelope-o fa-fw"></i></div>
                    <input
                      id="newsletter-subscription-input-email"
                      name="email"
                      type="email"
                      class="form-control"
                      aria-describedby="newsletter-subscription-help-message"
                      placeholder="Email Address"
                      v-model="newsletterSubscription.email"
                      @focus="setNewsletterSubscriptionHelpMessage('Required. We\'ll never share your email with anyone else.')"
                      @blur="clearNewsletterSubscriptionHelpMessage">
                  </div><!-- /.input-group -->
                </div><!-- /.form-group .col -->
              </div><!-- /.row -->
              <div class="form-group text-left">
                <button type="submit" class="btn btn-info">Subscribe!</button>
                <transition name="v-fade">
                  <small
                    v-if="newsletterSubscription.helpMessage"
                    id="newsletter-subscription-help-message"
                    class="form-text text-muted">
                    {{ newsletterSubscription.helpMessage }}
                  </small>
                </transition>
              </div><!-- /.form-group .text-left -->
            </form><!-- /form -->
          </div><!-- /.card-block -->
        </div><!-- /.card -->
      </div><!-- /.container -->
    </section><!-- /.newsletter-subscription -->

    <!-- MEDIA-MODAL
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <media-modal
      id="media-modal"
      :mediaItem="mediaModalItem">
    </media-modal>

  </div><!-- /#home-page -->

</template>



<script>
import moment from 'moment'
import fbapi from 'utils/fbapi'
import { ImageMediaItem, VideoMediaItem } from 'utils/MediaItem'
import MediaModal from 'components/MediaModal'
import heroImages from 'assets/images/home/hero/hero-images'

export default {
  name: 'home-page',
  components: {
    MediaModal
  },
  data () {
    return {
      heroImageIndex: 0,
      blurb: 'Sabor is a club',
      event: null,
      media: {
        image1: null,
        image2: null,
        video: null
      },
      newsletterSubscription: {
        name: null,
        email: null,
        helpMessage: null,
      },
      mediaModalItem: null
    }
  },

  // When this page loads for the user...
  mounted () {
    // TODO handle errors
    /* Initialize fade-flowing hero images */
    setInterval(() => {
      this.heroImageIndex += 1
      if (this.heroImageIndex == heroImages.length)
        this.heroImageIndex = 0
    }, 5000)

    /* Get the 'about' info. */
    fbapi('', {
      fields: 'about'
    }, response => {
      this.blurb = response.about
    })

    /* Get the most recent event. */
    fbapi('events', {
      // since: Date.now() / 1000 | 0,
      fields: 'id,name,description,start_time,end_time,place,cover',
      limit: '1'
    }, response => {
      this.event = response.data[0]
    })

    /* Get the two most recent photos. */
    fbapi('photos', {
      type: 'uploaded',
      fields: 'images,source,name,created_time',
      limit: '2'
    }, response => {
      this.media.image1 = response.data[0]
      this.media.image2 = response.data[1]
    })

    /* Get the most recent video. */
    fbapi('videos', {
      type: 'uploaded',
      fields: 'source,description,created_time,picture',
      limit: '1'
    }, response => {
      this.media.video = response.data[0]
    })
  },

  // Compute necessary data (for caching/performance)
  computed: {
    cHeroImage () {
      return heroImages[this.heroImageIndex]
    },

    cEvent () {
      return this.event && {
        name: this.event.name,
        description: this.event.description,
        link: `https://www.facebook.com/${ this.event.id }`,
        imgsrc: this.event.cover.source,
        location: this.event.place.name,
        locationLink: `https://www.google.com/maps/place/${ this.event.place.name }`,
        startDate: moment(this.event.start_time).format('dddd, MMM Do'),
        startTime: moment(this.event.start_time).format('h:mma'),
        endDate: moment(this.event.end_time).format('dddd, MMM Do'),
        endTime: moment(this.event.end_time).format('h:mma'),
        relativeTimeMessage: `${ ((new Date(this.event.start_time)).getTime() - Date.now()) / (24 * 60 * 60 * 1000) } days from now`
        // relativeTimeMessage: `Happening ${ moment(this.event.start_time).fromNow() }`
      }
    },

    cMedia () {
      // for brevity
      const img1 = this.media.image1
      const img2 = this.media.image2
      const vid = this.media.video
      return (img1 || img2 || vid) && { // ensure there is media data to display
        image1: img1 && new ImageMediaItem({ // ensure img1 defined
          title: moment(img1.created_time).calendar(),
          description: img1.name, // fkn facebook...
          createdTime: moment(img1.created_time).format('MMMM Do YYYY'),
          thumbnail: img1.images[img1.images.length - 1].source, // get smallest thumbnail
          src: img1.source
        }),
        image2: img2 && new ImageMediaItem({ // ensure im2 defined
          title: moment(img2.created_time).calendar(),
          description: img2.name, // fkn facebook...
          createdTime: moment(img2.created_time).format('MMMM Do YYYY'),
          thumbnail: img2.images[img2.images.length - 1].source, // get smallest thumbnail
          src: img2.source
        }),
        video: vid && new VideoMediaItem({ // ensure vid defined
          title: moment(vid.created_time).calendar(),
          description: vid.description,
          createdTime: moment(vid.created_time).format('MMMM Do YYYY'),
          thumbnail: vid.picture,
          src: vid.source
        })
      }
    }
  },

  methods: {
    setNewsletterSubscriptionHelpMessage (message, event) {
      this.newsletterSubscription.helpMessage = message
    },
    clearNewsletterSubscriptionHelpMessage (event) {
      this.newsletterSubscription.helpMessage = null
    },
    setMediaModalItem (mediaItem, event) {
      this.mediaModalItem = mediaItem
    }
  }
}
</script>



<style scoped>

/* WHOLE PAGE
–––––––––––––––––––––––––––––––––––––––––––––––––– */

#home-page section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}


/* HERO
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.hero {
  position: relative;
  height: 40rem;
}

/*
 * this wrapper is needed so the hero-imgs can have position:absolute
 * (so the img elements can v-fade on top of each other)
 */
.hero .hero-img-wrapper {
  width: 100%;
  height: inherit;
}

.hero .hero-img {
  object-fit: cover;
  width: 100%;
  height: inherit;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.hero .hero-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.hero .hero-overlay img {
  top: 17rem;
  position: relative;
}

.hero .hero-logo-img {
  object-fit: cover;
  width: 60%;
  filter: drop-shadow(16px 16px 10px black);
}

@media (max-width: 991px) {
  .hero {
    height: 20rem;
  }
  .hero .hero-logo-img {
    width: 100%;
  }
}

/* BLURB
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.blurb {
  background-color: transparent;
}

.blurb .container {
  max-width: 40rem;
}

.blurb p {
  white-space: pre-wrap;
}


/* LATEST EVENT
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.event {
  /* same color as bootstrap 'jumbotron' grey */
  background-image: url('~assets/images/home/latest-media-background.jpg');
  background-size: cover;
  /*background-color: rgb(236, 238, 239);*/
}

/*
 * Because for some ridiculous reason the overlay spans the whole .card
 * see https://github.com/twbs/bootstrap/issues/21256
 */
.event .card-img-overlay-wrapper {
  position: relative;
}

/*
 * have the image fill, not stretch
 * make the image slightly transparent so overlay text is more legible
 */
.event .card-img {
  object-fit: cover;
  width: 100%;
  height: 20rem;
  filter: opacity(20%);
}

/*
 * Sketchy. This is to overlay the event title over the bottom part of the image
 * because bootstrap is sometimes incredibly annoying.
 */
.event .card-title {
  position: relative;
  top: 12rem;
}

.event .card-block {
  max-width: 40rem;
}

/* DANCE STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.dance-styles {
  background-color: rgb(241,99,125);
}

.dance-styles p {
  max-width: 18rem;
}

.dance-styles a {
  color: rgb(144,59,75);
}

/* 'css-sprites' generated with online tool */
.sprite {
  background-image: url('~assets/images/home/dance-sprites.png');
  background-repeat: no-repeat;
  display: block;
  margin-right: 1.5rem;
}
.sprite-bachata {
  width: 27px;
  height: 35px;
  background-position: -5px -5px;
}
.sprite-dancehall {
  width: 24px;
  height: 35px;
  background-position: -42px -5px;
}
.sprite-hiphop {
  width: 27px;
  height: 35px;
  background-position: -5px -50px;
}
.sprite-merengue {
  width: 19px;
  height: 35px;
  background-position: -42px -50px;
}
.sprite-more {
  width: 34px;
  height: 35px;
  background-position: -76px -5px;
}
.sprite-salsa {
  width: 21px;
  height: 35px;
  background-position: -71px -50px;
}

/* LATEST MEDIA
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.media {
  background-size: cover;
}

/* Center align the text within three columns */
.media .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}

.media img {
  object-fit: cover;
}

.media h2 {
  font-weight: normal;
}

.media p {
  margin-right: .75rem;
  margin-left: .75rem;
}

/* RELEVE
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.releve h2 {
  font-weight: normal;
}


/* NEWSLETTER SUBSCRIPTION
–––––––––––––––––––––––––––––––––––––––––––––––––– */

@media (min-width: 768px) {

  .newsletter-subscription .container {
    max-width: 55rem;
  }

  .newsletter-subscription .card-block {
    margin-left: 7rem;
    margin-right: 7rem;
  }

}

</style>
