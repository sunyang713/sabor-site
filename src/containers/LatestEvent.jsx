import React from 'react'
import reduxify from 'store/reduxify'
import * as latestEventActions from 'actions/latestEvent'
import * as modalActions from 'actions/modal'
import Event from 'components/Event'
import Promotion from 'components/Promotion'

class LatestEventContainer extends React.Component {
  constructor(props) {
    super(props)
    this.props.latestEventActions.pullLatestEvent()
  }

  render() {
    const { latestEvent, modalActions } = this.props
    return latestEvent.exists && false ? (
      <Event
        title={ latestEvent.title }
        imgsrc={ latestEvent.imgsrc }
        date={ latestEvent.date }
        start_time={ latestEvent.start_time }
        end_time={ latestEvent.end_time }
        place={ latestEvent.place }
        description={ latestEvent.description }
        modalActions={ modalActions }
      />
    ) : <Promotion />
  }
}

export default reduxify({
  component: LatestEventContainer,
  state: 'latestEvent',
  actions: { latestEventActions, modalActions }
})
