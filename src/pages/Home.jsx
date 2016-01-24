import React from 'react'

/* Containers */
// import Promotion from 'containers/Promotion'
import Blurb from 'containers/Blurb'
import Modal from 'containers/Modal'
import Navbar from 'containers/Navbar'

/* Components */
import Cover from 'components/Cover'
import Footer from 'components/Footer'

// TODO: add line breaks for txt files.
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Modal />
        <Cover />
        <hr />
        <Navbar />
        <hr />
        <Blurb />
        <Footer />
        <div className="transparent-block" />
        <div className="transparent-block" />
        <div className="transparent-block" />
        <div className="transparent-block" />
        <div className="transparent-block" />
        <div className="transparent-block" />
        <div className="transparent-block" />
        <div className="transparent-block" />
      </div>
    )
  }
}
