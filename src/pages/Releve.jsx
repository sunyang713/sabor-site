import React from 'react'

/* Containers */
import Navbar from 'containers/Navbar'

import Footer from 'components/Footer'

// TODO: add line breaks for txt files.
export default class Releve extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <Navbar />
        <hr />
        <h1>{ 'Releve' }</h1>
        <Footer />

      </div>
    )
  }
}
