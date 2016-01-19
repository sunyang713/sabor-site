import React from 'react'
import reduxify from 'toolbox/reduxify'
import * as eventsActions from 'actions/events'
import * as modalActions from 'actions/modal'
import Events from 'components/Events'

class EventsListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.props.actions.pullEvents()
  }


  // TODO: make super functional
  // TODO: don't have the imgsrc correct name
  render() {
    return (
      <Events
        events={ this.props.events }
        actions={ this.props.actions }
      />
    )
  }

}

export default reduxify({
  component: EventsListContainer,
  reducers: ['events'],
  actions: [eventsActions, modalActions]
})

// dispatch() from anywhere?
