import React from 'react';

import Modal from 'components/lib/modal';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';



var token = '1680042688876649|gaW3PaycGVrYQJR8RLpsBMDLIYI';
var appID = '1680042688876649';


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
        appId   : appID,
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
    return (
      <div className="site-wrapper" >
        <Navbar />

        <Modal
          show={ this.state.showModal }
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
              token: token
            }
          ) 
        }

        <Footer />
      </div>
    );
  }
}






