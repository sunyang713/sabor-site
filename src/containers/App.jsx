import React from 'react'
import Modal from 'containers/modal'

// import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

// import 'base.styl';
// import 'styles/main.css';
// import 'dev.css';


export default class App extends React.Component {
  render() {
    // const childProps = {
    //   title: modal.title,
    //   info: modal.info,
    //   img: modal.img,
    //   description: modal.description
    // }
    // const RouteHandler = React.cloneElement(
    //   children,
    //   childProps
    // )
    return (
      <div className="site-wrapper" >
        <Modal />
        { this.props.children }
        <Footer />
      </div>
    )
  }
}
