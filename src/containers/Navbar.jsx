import React from 'react'
import { routeActions } from 'react-router-redux'
import reduxify from 'store/reduxify'
import Navbar from 'components/Navbar'

class NavbarContainer extends React.Component {
  render() {
    const links = ['Home', 'Team', 'Releve'] // TODO make this better
    return (
      <Navbar
        push={ this.props.routeActions.push }
        links={ links }
        withLogo={ this.props.withLogo }
        home={ this.props.home }
      />
    )
  }
}

export default reduxify({
  component: NavbarContainer,
  state: 'none',
  actions: { routeActions }
})
