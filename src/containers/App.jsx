import React from 'react'

/* Containers */
import Modal from 'containers/modal'

/* Components */
// import Navbar from 'components/Navbar'
import Footer from 'components/Footer'



/* Global styles */
import 'assets/css/normalize.css'
import 'assets/css/skeleton.css'
// import 'assets/styles/global'


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Modal />
        { this.props.children }
        <Footer />
      </div>
    )
  }
}
