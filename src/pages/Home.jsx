import React from 'react'

/* Containers */
import Promotion from 'containers/Promotion'
import Blurb from 'containers/Blurb'
import Navbar from 'containers/Navbar'
import Highlights from 'containers/Highlights'

/* Components */
import Cover from 'components/Cover'
import Footer from 'components/Footer'

// TODO: add line breaks for txt files.
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Cover />
        <hr />
        <Navbar />
        <Blurb />
        <hr />
        <Promotion />
        <hr />
        <Highlights />
        <hr />
        <Footer />
      </div>
    )
  }
}
