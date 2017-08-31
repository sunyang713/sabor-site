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
    },
    nextHeroImage () {
      const nextIndex = this.heroImageIndex < NUM_HERO_PIX ?
        this.heroImageIndex + 1
      : 1
      return require(`./images/hero-${ nextIndex }.jpg`)
    }
  }, // end 'computed'

  /*
   * Instructions to execute when this component mounts on the DOM (i.e. when loaded for user).
   */
  created () {
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

    /* Get the closest future event. Otherwise, get the most recent event. */
    fbapi('cusabor/events', {
      fields: 'id,name,description,start_time,end_time,place,cover',
      since: 'today'
    }, response => {
      const eventData = response.data[response.data.length - 1]
      if (eventData) {
        this.setEventFromFacebookData(eventData)
      } else {
        fbapi('cusabor/events', {
          fields: 'id,name,description,start_time,end_time,place,cover',
          limit: '1'
        }, response => {
          const eventData = response.data[response.data.length - 1]
          this.setEventFromFacebookData(eventData)
        })
      }
    })

    /* Get the three most recent facebook posts. */
    fbapi('cusabor/posts', {
      fields: 'permalink_url,message,created_time,full_picture,attachments.limit(1){media}',
      limit: '3'
    }, response => {
      this.posts = response.data.map(post => ({
        title: moment(post.created_time).fromNow(),
        time: moment(post.created_time).calendar(),
        description: post.message || 'Sabor!',
        image: post.full_picture,
        url: post.permalink_url
      }))
    })

  }, // end 'mounted()'

  beforeDestroy() {
    clearInterval(this.intervalId)
  }, // end 'beforeDestroy()'

  methods: {
    setEventFromFacebookData(eventData) {
      this.event = {
        name: eventData.name,
        description: eventData.description,
        link: `https://www.facebook.com/${ eventData.id }`,
        image: eventData.cover.source,
        location: eventData.place.name,
        locationLink: `https://www.google.com/maps/place/${ eventData.place.name }`,
        startDate: moment(eventData.start_time).format('dddd, MMM Do'),
        startTime: moment(eventData.start_time).format('h:mma'),
        endDate: moment(eventData.end_time).format('dddd, MMM Do'),
        endTime: moment(eventData.end_time).format('h:mma'),
        relativeTimeMessage: moment(eventData.start_time).fromNow(),
        isNew: moment(eventData.start_time) - moment() > 0
      }
    }
  }

} // end 'export'
