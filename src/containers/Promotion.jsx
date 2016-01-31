import React from 'react'
import reduxify from 'store/reduxify'
import * as latestEventActions from 'actions/latestEvent'
import Event from 'components/Event'

class PromotionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.props.latestEventActions.pullLatestEvent()
  }

  render() {
    const { latestEvent } = this.props
    return latestEvent.exists ? (
      <Event
        title={ latestEvent.title }
        imgsrc={ latestEvent.imgsrc }
        date={ latestEvent.date }
        start_time={ latestEvent.start_time }
        end_time={ latestEvent.end_time }
        place={ latestEvent.place }
        description={ latestEvent.description }
      />
    ) : <div />
  }
}

export default reduxify({
  component: PromotionContainer,
  state: 'latestEvent',
  actions: { latestEventActions }
})
