import { ADD_EVENT, SET_EVENTS } from 'constants'
import { FB_APP_ID, FB_TOKEN } from 'KEYCHAIN'
import moment from 'moment'

// 'event' might be reserved
export function addEvent(event) {
  return {
    type: ADD_EVENT,
    payload: {
      event: event
    }
  }
}

// events is an array of events
export function setEvents(events) {
  return {
    type: SET_EVENTS,
    payload: {
      events: events
    }
  }
}


// TODO: separate the typical FB stuff and make a reusuable function that takes in the desired fields and callback.
export function pullEvents() {
  return (dispatch) => {

    window.fbAsyncInit = function() {
      FB.init({
        appId      : FB_APP_ID,
        xfbml      : true,
        version    : 'v2.5'
      });
      FB.api(
        '/cusabor/events',
        'GET',
        {
          access_token: FB_TOKEN,
          'fields': 'name,description,start_time,end_time,place,cover'
        },
        function(response) {
          const events = response.data;
          for (var i = 0; i < events.length; i++) {
            const { id, name, start_time, end_time, place, cover, description } = events[i];
            const payload = {
              title: name,
              imgsrc: cover.source,
              date: moment(start_time).format('dddd, MMM Do'),
              start_time: moment(start_time).format('h:mma'),
              end_time: moment(end_time).format('h:mma'),
              place: place.name,
              link: 'https://www.facebook.com/' + id,
              description: description
            };
            dispatch(addEvent(payload));
          }
        }
      );
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  }
}



          // "since": Date.now() / 1000 | 0 // Get seconds
