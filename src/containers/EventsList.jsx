import React from 'react'
import reduxify from 'store/reduxify'
import * as eventsActions from 'actions/events'
import * as modalActions from 'actions/modal'
import EventsList from 'components/EventsList'

class EventsListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.props.eventsActions.pullEvents()
  }

  render() {
    return (
      <EventsList
        events={ this.props.events }
        modalActions={ this.props.modalActions }
      />
    )
  }
}

export default reduxify({
  component: EventsListContainer,
  selector: 'events',
  actions: { eventsActions, modalActions }
})
