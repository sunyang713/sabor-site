import React from 'react'
import reduxify from 'store/reduxify'
import { routeActions } from 'redux-simple-router'
import * as blurbActions from 'actions/blurb'
import Blurb from 'components/Blurb'

class BlurbContainer extends React.Component {
  constructor(props) {
    super(props)
    this.props.blurbActions.pullBlurb()
  }


  // TODO fix this
  render() {
    return (
      <Blurb
        text={ this.props.blurb.blurb }
        push={ this.props.routeActions.push }
      />
    )
  }
}

export default reduxify({
  component: BlurbContainer,
  state: 'blurb',
  actions: { blurbActions, routeActions }
})
