import React from 'react';


class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calledFB: false,
      id: '',
      data: {
        title: '',
        description: '',
        location: '',
        img: '',
        info: []
      }
    };
  }

  getData() {
    this.props.FB.api(
      this.props.id,
      'GET',
      {
        access_token: this.props.token,
        "fields":"name,description,start_time,place,picture.width(1000)"
      },
      function(response) {
        this.setState({
          data: {
            title: response.name,
            description: response.description,
            img: response.picture.data.url,
            info: [
              {key: 'time', value: response.start_time},
              {key: 'location', value: response.place.name},
              {key: 'date', value: 'May 2st'}
            ]
          },
          calledFB: true
        })
      }.bind(this)
    )
  }

  handleClick() {
    this.props.openModal(this.state.data)
  }

  render() {
    if (Object.keys(this.props.FB).length !== 0 && !this.state.calledFB)
      this.getData()

    return (
      <div className="event" onClick={ this.handleClick.bind(this) } >
        <p>{ this.state.data.title }</p>
      </div>
    )
  }
}

export default Event;

