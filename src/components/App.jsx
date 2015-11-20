import React from 'react';

import Modal from 'components/lib/modal';

import Navbar from 'components/Navbar';
import ContactCard from 'components/ContactCard';
import Footer from 'components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css'; // sketchy, inefficient
import 'base.styl';

import 'styles/main.css';
// import 'dev.css';


const TOKEN = '1680042688876649|gaW3PaycGVrYQJR8RLpsBMDLIYI';
const APP_ID = '1680042688876649';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      FB: {},
      picture: {},
      showModal: false,
      modalData: {}
    };
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId   : APP_ID,
        xfbml   : true,
        version : 'v2.5'
      });
      this.setState({ FB: FB });
    }.bind(this);

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  closeModal() {
    this.setState({ showModal: false });
  }
  openModal(data) {
    this.setState({ modalData: data, showModal: true });
  }


  render() {




    let backgroundStyle = {
      content: '""',
      display: 'block',
      position: 'fixed',
      left: '0',
      right: '0',
      zindex: '-1',
      width: '100%',
      height: '100%',
      backgroundImage: 'url(' + require('assets/images/eiffel.jpg') + ')',
      backgroundSize: 'cover'
    };
          // <div style={divStyle}>inline style test</div>


    return (
      <div className="site-wrapper" >
        <Navbar />

        <Modal
          show={ this.state.showModal /* sketchy af */}
          close={ this.closeModal.bind(this) }
          data={ this.state.modalData }
        />

        {
          React.cloneElement(
            this.props.children,
            {
              FB: this.state.FB,
              openModal: this.openModal.bind(this),
              closeModal: this.closeModal.bind(this),
              token: TOKEN
            }
          ) 
        }

        <ContactCard />

        <div className="transparent-block" />

        <Footer />
      </div>
    );
  }
}






