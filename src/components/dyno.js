import React from 'react';
import Event from './event';
import Cover from './cover';
import TeamInfo from './team-info';
import Events from './events';
import Releve from './releve';

var token = '1680042688876649|gaW3PaycGVrYQJR8RLpsBMDLIYI';

class Dyno extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      FB: {},
      event_ids: [],
      picture: {}
    }
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId   : '1680042688876649',
        xfbml   : true,
        version : 'v2.5'
      });

      // Store the FB object thing
      this.setState({ FB: FB });

      // Grab all the events
      FB.api(
        '/cusabor/events',
        'GET',
        { access_token: token, fields: 'id' },
        function(response) {
          var ids = []
          for ( let i in response.data )
            ids[i] = response.data[i].id
          this.setState({ event_ids: ids })
        }.bind(this)
      );

      // Get the profile picture
      FB.api(
        '/cusabor/picture',
        'GET',
        { access_token: token, width: '300' },
        function(response) {
          this.setState({ picture: response.data })
        }.bind(this)
      );

    }.bind(this);

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  render() {



    return (
      <div>
        <p>Here is where the dynamic content will reside</p>






        <Cover />
        <Events FB={ this.state.FB } ids={ this.state.event_ids } token={ token } />
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

