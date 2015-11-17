import React from 'react';
import Event from './event';
import Cover from './cover';
import TeamInfo from './team-info';
import Events from './events-list';
import Releve from './releve';
import { Button } from 'react-bootstrap';
import Modal from './lib/modal';

var token = '1680042688876649|gaW3PaycGVrYQJR8RLpsBMDLIYI';

class Dyno extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      FB: {},
      picture: {},
      modalID: undefined,
      showModal: false,
      data: {}
    }
  }

  /* Initializes and stores FB object */
  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId   : '1680042688876649',
        xfbml   : true,
        version : 'v2.5'
      });
      // Store the FB object thing
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

  openModal(dat) {
    this.setState({ data: dat, showModal: true });
  }





  render() {

    return (
      <div>

        <Cover FB={ this.state.FB } token={ token } />


        <Modal
          show={ this.state.showModal }
          close={ this.closeModal.bind(this) }
          data={ this.state.data } />

        <Events
          FB={ this.state.FB }
          openModal={ this.openModal.bind(this) }
          closeModal={ this.closeModal.bind(this) }
          token={ token } />
        <TeamInfo />
        <Releve />



        <div
          className="fb-like"
          data-share="true"
          data-width="450"
          data-show-faces="true">
        </div>

        <img src={ this.state.picture.url } />

      </div>
    )
  }
}

export default Dyno;

