import React from 'react'

/* Containers */
import Navbar from 'containers/Navbar'
// import TeamList from 'containers/TeamList'

import Footer from 'components/Footer'

// TODO: add line breaks for txt files.
export default class Team extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <Navbar withLogo />
        <hr />
        <h1>{ 'Meet the team' }</h1>

        <Footer />
      </div>
    )
  }
}
