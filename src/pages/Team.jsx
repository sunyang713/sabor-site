import React from 'react'

/* Containers */
import Modal from 'containers/Modal'
import Navbar from 'containers/Navbar'
import TeamList from 'containers/TeamList'

import Footer from 'components/Footer'

// TODO: add line breaks for txt files.
export default class Team extends React.Component {
  render() {
    return (
      <div>
        <Modal />
        <hr />
        <Navbar withLogo />
        <hr />
        <h1>{ 'Meet the team' }</h1>
        <TeamList />
        <Footer />
      </div>
    )
  }
}
