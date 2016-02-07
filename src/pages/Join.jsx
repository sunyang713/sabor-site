import React from 'react'

/* Containers */
import Navbar from 'containers/Navbar'

/* Components */
import Footer from 'components/Footer'


export default class Join extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>{ 'Join' }</h1>
        <Footer />
      </div>
    )
  }
}
