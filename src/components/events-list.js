import React from 'react';
import Event from './event';


class EventsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      event_ids: [],
      calledFB: false
    };
  }

  getIDs() {
    this.props.FB.api(
      '/cusabor/events',
      'GET',
      { access_token: this.props.token, fields: 'id', limit: 3 },
      function(response) {
        var ids = []
        for ( let i in response.data )
          ids[i] = response.data[i].id
        this.setState({ calledFB: true, event_ids: ids })
      }.bind(this)
    );
  }

  render() {

    if (Object.keys(this.props.FB).length !== 0 && !this.state.calledFB)
      this.getIDs()

    var events = [];

    for (var id of this.state.event_ids) {
      events.push( <Event key={ id } id={ id } FB={ this.props.FB } token={ this.props.token } /> )
    }


    return (
      <div>
        <p>Events:</p>
        { events }
      </div>
    )
  }
}

export default EventsList;

