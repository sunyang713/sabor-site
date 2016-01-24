import React from 'react'
import { routeActions } from 'redux-simple-router'
import reduxify from 'store/reduxify'
import Navbar from 'components/Navbar'

class NavbarContainer extends React.Component {
  render() {
    const links = ['/home', '/team', '/releve']
    const names = ['Home', 'Team', 'Releve'] // TODO make this better
    return (
      <Navbar
        push={ this.props.routeActions.push }
        links={ links }
        names={ names }
        withLogo={ this.props.withLogo }
      />
    )
  }
}

export default reduxify({
  component: NavbarContainer,
  state: 'none',
  actions: { routeActions }
})
