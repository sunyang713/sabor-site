<template>
  <div id="team-page">

    <!-- HERO
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <section class="hero jumbotron">
      <div class="container">
        <h1 class="display-1">Meet the Sa-familia</h1>
        <p class="lead font-italic">Un grupo unido jamás será vencido Sabor</p>
      </div><!-- /.container -->
    </section><!-- /.hero -->

    <!-- BOARD
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <section v-if="roster" class="board container mb-4" id="board">
      <h1>The Board</h1>
      <hr>
      <div class="card-group">
        <div class="card card-inverse col-md-3 mb-1 p-0" v-for="member in boardMembers" :key="member.name" :title="member.flavor">
          <img class="card-img h-100" :src="member.picture || 'images/placeholder.png'" :alt="`${ member.name } picture`">
          <transition name="v-fade">
            <div class="card-img-overlay">
              <h4 class="card-title">{{ member.name }}</h4>
              <h6 class="card-subtitle mb-2">{{ member.boardPosition }}</h6>
              <p class="card-text">{{ member.year }}</p>
            </div>
          </transition>
        </div><!-- /.card -->
      </div><!-- /.card-group -->
    </section><!-- /.board -->

    <!-- PARALLAX IMAGE
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div class="parallax-image" :style="`background-image: url('${ teamPicture }')`"></div>

    <!-- QUOTE
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <section class="quote bg-info mb-5 py-5" id="team-page-quote">
      <div class="container">
        <transition name="v-fade-overlay">
          <blockquote class="blockquote text-white" :key="quote.name">
            <p class="h4 font-weight-normal">
              <i class="fa fa-2x fa-fw fa-quote-left align-middle" aria-hidden="true"></i><span class="align-middle">{{ quote.text }}</span><i class="fa fa-2x fa-fw fa-quote-right align-middle" aria-hidden="true"></i>
            </p><!-- /.h4 -->
            <footer class="blockquote-footer text-white">
              {{ quote.name }},
              <cite :title="quote.name">{{ quote.source }}</cite>
            </footer>
          </blockquote><!-- /.blockquote -->
        </transition>
      </div><!-- /.container -->
    </section><!-- /.quote -->

    <!-- ROSTER
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <section v-if="roster" class="roster container my-5" id="roster">
      <h1>Full Roster</h1>
      <hr>
      <ul class="list-unstyled">
        <li v-for="member in roster"
          :key="member.name"
          :class="{
            'fade-on-hover': member.quote
          }"
          :title="member.flavor"
          @click="setQuote(member, true)">
          {{ member.name }}
        </li>
      </ul>
    </section>

    <!-- JOIN
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <section class="join">
      <div class="container py-5">
        <div class="card text-center">
          <div class="card-block my-5">
            <h4 class="card-title display-4 my-3">What flavor are you?</h4>
            <h6 class="card-subtitle text-muted my-3">We’re committed to our family and our dance, and we're always looking for new talent.</h6>
            <router-link class="btn btn-lg btn-danger my-3" to="/join">Join the family &rsaquo;</router-link>
          </div><!-- /.card-block -->
        </div><!-- /.card -->
      </div><!-- /.container -->
      <p class="sr-only">what flavor r u? find out how join</p>
    </section><!-- /.join -->

  </div>
</template>



<script>
import Member from 'classes/Member'
import fbapi from 'utils/fbapi'
import gSheetsApi from 'utils/gSheetsApi'
import getRandomInteger from 'utils/getRandomInteger'

export default {

  name: 'team-page',

  data () {
    return {
      boardMembers: null,
      roster: null,
      quotedMembers: null,
      teamPicture: null,
      quote: {
        name: 'Sabor',
        source: '2003',
        text: 'Un grupo unido jamás será vencido Sabor'
      },
      intervalId: 0
    }
  }, // end 'data()'

  mounted () {
    fbapi('cusabor/picture', {
      redirect: false,
      height: '999999' // because facebook is fucking retarded and you can't get a simple image.
    }, response => {
      this.teamPicture = response.data.url
    })

    gSheetsApi(
      '1ulbKpj6sHkf4bQqvgUk8clmP0C0AdMgW9Dk2YVB0C9w', // roster spreadsheet id
      'roster', // sheet name
      roster => {
        this.roster = roster.map(memberInfo => new Member(memberInfo))
        this.boardMembers = this.roster.filter(member => member.boardPosition)
        this.quotedMembers = this.roster.filter(member => member.quote)
        this.setQuoteRandom()
        this.intervalId = setInterval(this.setQuoteRandom, 6000) // six seconds
      }
    )
  }, // end 'mounted()'

  beforeDestroy() {
    clearInterval(this.intervalId)
  }, // end 'beforeDestroy()'

  methods: {

    setQuote(member, stopInterval) {
      if (member.quote) {
        this.quote.source = `${ member.school } ${ member.year }`
        this.quote.name = member.name
        this.quote.text = member.quote
        stopInterval && clearInterval(this.intervalId)
      }
    },

    /*
     * Random functions aren't fantastic, could be bad performance.
     */
    setQuoteRandom() {
      do {
        var i = getRandomInteger(0, this.quotedMembers.length)
        console.log(this.quotedMembers[i].quote)
      } while (!this.quotedMembers[i].quote)
      this.setQuote(this.quotedMembers[i])
    },

  } // end 'methods()'

}
</script>

<style scoped>

/* TEAM PAGE
–––––––––––––––––––––––––––––––––––––––––––––––––– */

#team-page section {
  /*margin-bottom: 5rem;*/
}


.hero {
  background-image: url('images/team/hero-background.jpg');
  background-size: cover;
  background-position: center center;
}

/* BOARD
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.board .card {
  height: 40rem;
}

.board img {
  object-fit: cover;
}

.board .card-img-overlay {
  opacity: 0;
  background-color: transparent;
  transition: background .25s, opacity .25s ease-in-out;
}

.board .card:hover .card-img-overlay {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.7);
}

/* QUOTE
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.quote {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

/* ROSTER
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.roster ul {
  columns: 3;
}

.roster li {
  color: black;
}

.roster .fade-on-hover:hover {
  cursor: pointer;
}

/* JOIN
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.join {
  background-image: url('images/team/join-background.jpg');
  background-size: cover;
}

</style>
