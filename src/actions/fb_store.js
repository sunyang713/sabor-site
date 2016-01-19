import { STORE } from 'constants'
import { FB_TOKEN, FB_APP_ID } from 'KEYCHAIN'

export function store(payload) {
  return {
    type: STORE,
    payload: payload
  }
}

export function request(params) {
  return (dispatch) => {
    window.fbAsyncInit = function() {
      FB.init({
        appId   : FB_APP_ID,
        xfbml   : true,
        version : 'v2.5'
      })

      FB.api(
        params.url,
        params.method,
        merge(
          {
            access_token: FB_TOKEN,
            "fields": params.fields,
          },
          params.extra
        ),
        function(response) {
          dispatch(store({key: params.key, value: response))
          dispatch(params.callback(response))
        }
      )
    }

    // wtf is this stuff
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js"
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
  }
}