import React from 'react';
// import createFragment from 'react-addons-create-fragment';

import Event from 'components/lib/Event';


export default class UpcomingEvents extends React.Component {

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
        "fields": "name,cover",
        "since": Date.now() / 1000 | 0 // Get seconds
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
    for (var id of this.state.event_ids)
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
    events.reverse(); // Order from earliest to latest

    return (
      <div className="content-wrapper upcoming-events">
        <h1>Upcoming Events</h1>
        <hr />
        <ul className="events-list list-unstyled">
          { events.length ? events : <em>No upcoming events</em> }
        </ul>
      </div>
    )
  }
}











