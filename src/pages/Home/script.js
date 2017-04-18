import moment from 'moment'
import fbapi from 'utils/fbapi'

const NUM_HERO_PIX = 7

export default {
  name: 'home-page',

  data () {
    return {
      heroImageIndex: 1,
      blurb: 'Sabor is a club',
      event: null,
      posts: null,
      newsletterSubscriptionHelpMessage: null,
      intervalId: 0
    }
  }, // end 'data()'

  computed: {
    heroImage () {
      return require(`./images/hero-${ this.heroImageIndex }.jpg`)
    }
  }, // end 'computed'

  /*
   * Instructions to execute when this component mounts on the DOM (i.e. when loaded for user).
   */
  mounted () {
    // TODO handle errors
    /* Initialize fade-flowing hero images */
    this.intervalId = setInterval(() => {
      this.heroImageIndex = this.heroImageIndex < NUM_HERO_PIX ?
        this.heroImageIndex + 1
      : 1
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
        image: event.cover.source,
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
        image: post.full_picture,
        url: post.permalink_url
      }))
    })

  }, // end 'mounted()'

  beforeDestroy() {
    clearInterval(this.intervalId)
  } // end 'beforeDestroy()'

} // end 'export'
