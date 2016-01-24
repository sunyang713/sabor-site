import React from 'react'
import reduxify from 'store/reduxify'
import * as eventsActions from 'actions/events'
import * as modalActions from 'actions/modal'
import Events from 'components/Events'

class EventsListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.props.eventsActions.pullEvents()
  }

  render() {
    return (
      <Events
        events={ this.props.events }
        modalActions={ this.props.modalActions }
      />
    )
  }
}

export default reduxify({
  component: EventsListContainer,
  state: 'events',
  actions: { eventsActions, modalActions }
})
