import React from 'react';
import moment from 'moment';


export default class Event extends React.Component {
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
        "fields":"name,description,start_time,end_time,place,picture.width(1000)"
      },
      function(response) {
        let date = moment(response.start_time).format("dddd, MMM Do");
        let start_time = moment(response.start_time).format("h:mma");
        let end_time = response.end_time ? '-' + moment(response.end_time).format("h:mma") : '';
        this.setState({
          data: {
            title: response.name,
            description: response.description,
            img: response.picture.data.url,
            info: [
              {key: 'date', value: date},
              {key: 'time', value: start_time + end_time},
              {key: 'location', value: response.place.name},
            ]
          },
          calledFB: true
        });
      }.bind(this)
    );
  }

  handleClick() {
    this.props.openModal(this.state.data);
  }

  render() {
    if (Object.keys(this.props.FB).length !== 0 && !this.state.calledFB)
      this.getData();

    return (
      <div className="event" onClick={ this.handleClick.bind(this) } >
        <h3>{ this.state.data.title }</h3>
      </div>
    )
  }
}


