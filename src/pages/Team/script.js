import Member from './Member'
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
      } while (!this.quotedMembers[i].quote)
      this.setQuote(this.quotedMembers[i])
    },

  } // end 'methods()'

}
