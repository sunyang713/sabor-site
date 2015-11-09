import React from 'react';
import Event from './event';


var token = '1680042688876649|gaW3PaycGVrYQJR8RLpsBMDLIYI';

class Dyno extends React.Component {

  constructor(props) {
    super(props);
    this.state = { FB: {}, events: {} };
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId   : '1680042688876649',
        xfbml   : true,
        version : 'v2.5'
      });

      // Store the FB object thing
      this.setState({ FB: FB })

      // Grab all the events
      FB.api(
        '/cusabor/events',
        'GET',
        { access_token: '1680042688876649|gaW3PaycGVrYQJR8RLpsBMDLIYI' },
        function(response) {
          this.setState({ events: response.data })
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

    var thing = JSON.stringify(this.state.events)

    var events = [];

    for (var i in this.state.events) {
      var event = this.state.events[i]
      events.push(
        <Event data={ event } />
      )
    }


    return (
      <div>
        <p>Here is where the dynamic content will reside</p>
        <div
          className="fb-like"
          data-share="true"
          data-width="450"
          data-show-faces="true">
        </div>
        { events }
      </div>
    )
  }
}

export default Dyno;

