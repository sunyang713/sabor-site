import React from 'react'

/* Containers */
import Navbar from 'containers/Navbar'

// TODO: add line breaks for txt files.
export default class Releve extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <Navbar withLogo />
        <hr />
        <h1>{ 'Releve' }</h1>
      </div>
    )
  }
}
