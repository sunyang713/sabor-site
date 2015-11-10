import React from 'react';
import Event from './event';


class Events extends React.Component {

  render() {

    var events = [];

    for (var id of this.props.ids)
      events.push( <Event key={ id } id={ id } FB={ this.props.FB } token={ this.props.token } /> )


    return (
      <div>
        <p>Events:</p>
        { events }
      </div>
    )
  }
}

export default Events;

