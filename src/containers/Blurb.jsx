import React from 'react'
import reduxify from 'store/reduxify'
import { routeActions } from 'react-router-redux'
import Blurb from 'components/Blurb'

class BlurbContainer extends React.Component {

  // TODO fix this
  render() {
    return (
      <Blurb
        push={ this.props.routeActions.push }
      />
    )
  }
}

export default reduxify({
  component: BlurbContainer,
  state: 'none',
  actions: { routeActions }
})
