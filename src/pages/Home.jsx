import React from 'react'

/* Containers */
import LatestEvent from 'containers/LatestEvent'
import Modal from 'containers/Modal'

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
        <LatestEvent />
        <Footer />
      </div>
    )
  }
}
