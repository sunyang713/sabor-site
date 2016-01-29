import React from 'react'
import { routeActions } from 'react-router-redux'
import reduxify from 'store/reduxify'
import Navbar from 'components/Navbar'

class NavbarContainer extends React.Component {
  render() {
    const links = ['/home', '/team', '/join', '/releve']
    const names = ['Home', 'Team', 'Join', 'Releve'] // TODO make this better
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
