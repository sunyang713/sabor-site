<template>

  <div id="home-page">

    <!-- HERO
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="hero">
      <transition name="v-fade-overlay">
        <img
          :src="cHeroImage"
          :key="`hero-img-${ heroImageIndex }`"
          class="hero-img">
      </transition>
    </div><!-- /.hero -->

    <!-- BLURB
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <section class="blurb">
      <div class="container text-center">
        <!-- <img class="img-fluid" src="images/logo.png"> -->
        <p class="lead">{{ this.blurb }}</p>
      </div><!-- /.container-->
    </section><!-- /.blurb -->

    <!-- DANCE STYLES
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <section class="dance-styles">
      <div class="container text-white">
        <h1 class="display-4 text-center">Sabor's Styles</h1>
        <hr class="my-4">
        <div class="row mb-md-5">
          <div class="col-md-4 px-md-4">
            <h2 class="font-weight-normal"><i class="sprite sprite-salsa"></i>Salsa</h2>
            <p class="text-white">Where our technical talent shines brightest. Stylish and fun.</p>
          </div><!-- /.col-md-4 -->
          <div class="col-md-4 px-md-4">
            <h2 class="font-weight-normal"><i class="sprite sprite-bachata"></i>Bachata</h2>
            <p class="text-white">Where our sensuality unfurls and exposes itself. Sexy and sensitive.</p>
          </div><!-- /.col-md-4 -->
          <div class="col-md-4 px-md-4">
            <h2 class="font-weight-normal"><i class="sprite sprite-merengue"></i>Merengue</h2>
            <p class="text-white">Where our pace picks up and our energy heats up. Exciting and spicy.</p>
          </div><!-- /.col-md-4 -->
        </div><!-- /.row -->
        <div class="row mb-md-5">
          <div class="col-md-4 px-md-4">
            <h2 class="font-weight-normal"><i class="sprite sprite-dancehall"></i>Dancehall</h2>
            <p>Where our bodies tell you what we want in the dark. Fierce and hot.</p>
          </div><!-- /.col-md-4 -->
          <div class="col-md-4 px-md-4">
            <h2 class="font-weight-normal"><i class="sprite sprite-afro-cuban"></i>Afro-Cuban</h2>
            <p>Where our past meets our future. Authentic and precise.</p>
          </div><!-- /.col-md-4 -->
          <div class="col-md-4 px-md-4">
            <h2 class="font-weight-normal"><i class="sprite sprite-more"></i>...and much more</h2>
            <p>Our skills include Caribbean, African, and other relatives of Latin dance.</p>
          </div><!-- /.col-md-4 -->
        </div><!-- /.row -->
        <router-link to="dance-styles">Come and learn more about our dances &rsaquo;</router-link>
      </div><!-- /.container -->
    </section><!-- /.dance-styles -->

    <!-- LATEST EVENT
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <section v-if="event" class="event">
      <div class="container">
        <div class="card">
          <div v-if="event.isNew" class="card-header text-center">New!</div>
            <div class="card-img-overlay-wrapper">
              <img class="card-img-top" :src="event.imgsrc" alt="Event image">
              <div class="card-img-overlay">
                <h4 class="card-title display-4">{{ event.name }}</h4>
              </div><!-- /.card-img-overlay -->
            </div><!-- /.card-img-overlay-wrapper -->
          <div class="card-block">
            <h5 class="font-weight-normal">{{ event.startDate }}, {{ event.startTime }}&nbsp;&ndash; {{ event.endTime }}</h5>
            <h5 class="font-weight-normal"><a :href="event.locationLink">{{ event.location }}</a></h5>
            <hr class="my-3">
            <p class="card-text lead formatted-text text-justify">{{ event.description }}</p>
            <div class="text-center">
              <a :href="event.link" class="btn btn-info">Learn more</a>
              <router-link to="/events" class="btn btn-secondary">More events</router-link>
            </div><!-- .text-center -->
          </div><!-- /.card-block -->
          <div class="card-footer text-muted text-center">
            {{ event.relativeTimeMessage }}
          </div><!-- /.card-footer -->
        </div><!-- /.card -->
      </div><!-- /.container -->
    </section><!-- /.event -->

    <!-- LATEST POSTS
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <section v-if="posts" class="posts">
      <div class="container text-center">
        <h1 class="display-4 text-center">Latest from Sabor</h1>
        <hr class="my-4">
        <div class="row">
          <div v-for="post in posts" :key="post.url" class="col-md">
            <div class="card text-left mb-4">
              <img class="card-img-top" :src="post.picture" :alt="post.url">
              <div class="card-block">
                <p class="formatted-text">{{ post.description }}</p>
                <a class="btn btn-secondary" role="button" :href="post.url">View &raquo;</a>
              </div><!-- /.card-block -->
              <div class="card-footer">
                <small class="text-muted">{{ post.time }}</small>
              </div><!-- /.card-footer -->
            </div><!-- /.card -->
          </div><!-- /.col-md -->
        </div><!-- /.row -->
        <router-link to="media">Check out more recent media here &rsaquo;</router-link>
      </div><!-- /.container -->
    </section><!-- /.media -->

    <!-- RELEVE
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <section class="releve bg-warning text-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-7 text-center text-md-left">
            <h2>Relevé &middot; Our award-winning outreach</h2>
            <p>Every spring, we host a three-day program for underserved but ambitious high school students. We provide workshops in both the performing arts and college admissions amidst a weekend of dancing.</p>
            <router-link to="releve" class="btn btn-transparent">Learn more or apply for Relevé &rsaquo;</router-link>
          </div><!-- /.col-md-7 -->
          <div class="col-md-5">
            <img class="img-fluid" src="images/home/kings-crown-award.png">
          </div><!-- /.col-md-5 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section><!-- /.dance-styles -->

    <!-- NEWSLETTER SUBSCRIPTION
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <section class="newsletter-subscription bg-info">
      <div class="container">
        <div class="card">
          <div class="card-block py-5">
            <h4 class="card-title display-4 text-center">Want a taste?</h4>
            <h6 class="card-subtitle text-muted text-center">Subscribe to our newsletter. No spam, promised.</h6>
            <hr class="my-4">
            <form action="https://lists.columbia.edu/mailman/subscribe/saborgbody" method="POST">
              <div class="row">
                <div class="form-group col-md">
                  <label for="newsletter-subscription-input-name" class="sr-only">Name</label>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-user-o fa-fw"></i>
                    </div><!-- /.input-group-addon -->
                    <input
                      id="newsletter-subscription-input-name"
                      name="fullname"
                      type="text"
                      class="form-control"
                      aria-describedby="newsletter-subscription-help-message"
                      placeholder="Name"
                      @focus="newsletterSubscriptionHelpMessage = 'Optional.'"
                      @blur="newsletterSubscriptionHelpMessage = null">
                  </div><!-- /.input-group -->
                </div><!-- /.form-group .col -->
                <div class="form-group col-md">
                  <label for="newsletter-subscription-input-email" class="sr-only">Email Address</label>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-envelope-o fa-fw"></i>
                    </div><!-- /.input-group-addon -->
                    <input
                      id="newsletter-subscription-input-email"
                      name="email"
                      type="email"
                      class="form-control"
                      aria-describedby="newsletter-subscription-help-message"
                      placeholder="Email Address"
                      @focus="newsletterSubscriptionHelpMessage = 'Required. We\'ll never share your email with anyone else.'"
                      @blur="newsletterSubscriptionHelpMessage = null">
                  </div><!-- /.input-group -->
                </div><!-- /.form-group .col-md -->
              </div><!-- /.row -->
              <div class="form-group">
                <button type="submit" class="btn btn-info">Subscribe!</button>
                <transition name="v-fade">
                  <small
                    v-if="newsletterSubscriptionHelpMessage"
                    id="newsletter-subscription-help-message"
                    class="form-text text-muted">
                    {{ newsletterSubscriptionHelpMessage }}
                  </small>
                </transition>
              </div><!-- /.form-group .text-left -->
            </form><!-- /form -->
          </div><!-- /.card-block -->
        </div><!-- /.card -->
      </div><!-- /.container -->
    </section><!-- /.newsletter-subscription -->

  </div><!-- /#home-page -->

</template>



<script>
import moment from 'moment'
import fbapi from 'utils/fbapi'
// import heroImages from 'assets/images/home/hero-images'
const heroImages = [
  'images/home/hero-1.jpg',
  'images/home/hero-2.jpg',
  'images/home/hero-3.jpg',
  'images/home/hero-4.jpg',
  'images/home/hero-5.jpg',
  'images/home/hero-6.jpg',
  'images/home/hero-7.jpg'
]

export default {
  name: 'home-page',

  data () {
    return {
      heroImageIndex: 0,
      blurb: 'Sabor is a club',
      event: null,
      posts: null,
      newsletterSubscriptionHelpMessage: null,
      intervalId: 0
    }
  }, // end 'data()'

  /*
   * Instructions to execute when this component mounts on the DOM (i.e. when loaded for user).
   */
  mounted () {
    // TODO handle errors
    /* Initialize fade-flowing hero images */
    this.intervalId = setInterval(() => {
      this.heroImageIndex += 1
      if (this.heroImageIndex === heroImages.length)
        this.heroImageIndex = 0
    }, 6000) // six seconds

    /* Get the 'about' info. */
    fbapi('cusabor', {
      fields: 'about'
    }, response => {
      this.blurb = response.about
    })

    /* Get the most recent event. */
    fbapi('cusabor/events', {
      fields: 'id,name,description,start_time,end_time,place,cover',
      limit: '1'
    }, response => {
      const event = response.data[0]
      this.event = {
        name: event.name,
        description: event.description,
        link: `https://www.facebook.com/${ event.id }`,
        imgsrc: event.cover.source,
        location: event.place.name,
        locationLink: `https://www.google.com/maps/place/${ event.place.name }`,
        startDate: moment(event.start_time).format('dddd, MMM Do'),
        startTime: moment(event.start_time).format('h:mma'),
        endDate: moment(event.end_time).format('dddd, MMM Do'),
        endTime: moment(event.end_time).format('h:mma'),
        relativeTimeMessage: moment(event.start_time).fromNow(),
        isNew: new Date(event.start_time) - new Date() > 0
      }
    })

    /* Get the three most recent facebook posts. */
    fbapi('cusabor/posts', {
      fields: 'permalink_url,message,created_time,full_picture,attachments.limit(1){media}',
      limit: '3'
    }, response => {
      this.posts = response.data.map(post => (post.message && {
        title: moment(post.created_time).fromNow(),
        time: moment(post.created_time).calendar(),
        description: post.message,
        picture: post.full_picture,
        url: post.permalink_url
      }))
    })

  }, // end 'mounted()'

  beforeDestroy() {
    clearInterval(this.intervalId)
  }, // end 'beforeDestroy()'


  /*
   * Computed data (for caching/performance) Info dependant on specific fields from 'data' above.
   */
  computed: {

    cHeroImage () {
      return heroImages[this.heroImageIndex]
    } // end 'cHeroImage()'

  } // end 'computed'

} // end 'export'

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

.hero .hero-img {
  object-fit: cover;
  object-position: 50% 0%;
  width: 100%;
  height: auto;
  min-height: 300px;
  max-height: 600px;
}

/* BLURB
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.blurb .container {
  max-width: 50rem;
}

@media (min-width: 768px) {
  .blurb p {
    font-size: 1.7rem;
  }
}


/* DANCE STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.dance-styles {
  /* nice pink */
  background-color: rgb(241,99,125);
}

.dance-styles a {
  /* shade of nice pink */
  color: rgb(113,47,59);
}

/* 'css-sprites' generated with online tool */
.sprite {
  background-image: url('images/home/dance-sprites.png');
  background-repeat: no-repeat;
  display: inline-block;
  margin-right: 1rem;
}
.sprite-afro-cuban {
  width: 22px;
  height: 35px;
  background-position: -5px -5px;
}
.sprite-bachata {
  width: 27px;
  height: 35px;
  background-position: -37px -5px;
}
.sprite-dancehall {
  width: 24px;
  height: 35px;
  background-position: -5px -50px;
}
.sprite-merengue {
  width: 19px;
  height: 35px;
  background-position: -39px -50px;
}
.sprite-more {
  width: 35px;
  height: 35px;
  background-position: -74px -5px;
}
.sprite-salsa {
  width: 21px;
  height: 35px;
  background-position: -68px -50px;
}


/* LATEST EVENT
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.event {
  background-image: url('images/home/latest-event-background.jpg');
  background-size: cover;
}

/*
 * see https://github.com/twbs/bootstrap/issues/21256
 */
.event .card-img-overlay-wrapper {
  position: relative;
}

/*
 * have the image fill, not stretch
 * make the image slightly transparent so overlay text is more legible
 */
.event .card-img-top {
  object-fit: cover;
  width: 100%;
  height: 20rem;
  filter: opacity(20%);
}

.event .card-title {
  position: absolute;
  bottom: 0;
}

@media (min-width: 768px) {
  .event .card-img-overlay, .event .card-block {
    width: 50rem;
    margin-right: auto;
    margin-left: auto;
  }
}



/* LATEST POSTS
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.posts img {
  width: 100%;
}

/* RELEVE
–––––––––––––––––––––––––––––––––––––––––––––––––– */


/* NEWSLETTER SUBSCRIPTION
–––––––––––––––––––––––––––––––––––––––––––––––––– */

@media (min-width: 768px) {
  .newsletter-subscription .container {
    max-width: 50rem;
  }

  .newsletter-subscription .card-block {
    width: 40rem;
    margin-right: auto;
    margin-left: auto;
  }
}

</style>
