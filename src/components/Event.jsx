import BannerCard from 'components/lib/BannerCard'

export default class Event extends BannerCard {

  static defaultProps = {
    event: {
      title: '',
      imgsrc: ''
    }
  };

  constructor(props) {
    super(props)
  }

  handleClick() {
    const { modalActions, title, imgsrc, date, start_time, end_time, place, rsvp, description } = this.props
    return () => {
      modalActions.setModalContent({
        title,
        imgsrc,
        description,
        info: [
          ['Date',      date],
          ['Start',     start_time],
          ['End',       end_time],
          ['Location',  place],
          ['RSVP',      rsvp]
        ]
      })
      modalActions.showModal()
    }
  }
}
