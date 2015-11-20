import React from 'react';
import Event from 'components/lib/Event';

import './events.styl'


export default class EventsList extends React.Component {

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
      {
        access_token: this.props.token,
        fields: 'id',
        "limit":"10"
        // "since":"today"
      },
      function(response) {
        var ids = [];
        for ( let i in response.data )
          ids[i] = response.data[i].id;
        this.setState({ calledFB: true, event_ids: ids });
      }.bind(this)
    );
  }

  render() {

    if (Object.keys(this.props.FB).length !== 0 && !this.state.calledFB)
      this.getIDs();

    var events = [];

    for (var id of this.state.event_ids) {
      events.push(
        <li key={ id }>
          <Event
            id={ id }
            FB={ this.props.FB }
            token={ this.props.token }
            openModal={ this.props.openModal }
          />
        </li>
      );
    }


    return (
      <div>
        <div className="transparent-block" />
          <div className="content-wrapper">
            <h1>Events</h1>
            <hr />
            <ul className="events-list list-unstyled">
              { events }
            </ul>
          </div>
        <div className="transparent-block" />
      </div>
    );
  }
}

