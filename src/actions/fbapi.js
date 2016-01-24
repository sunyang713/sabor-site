import { APPLE, BANANA } from 'KEYCHAIN'
import merge from 'toolbox/merge'

export function fbapi({ url, fields, additional = {}, callback }) {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : APPLE,
      xfbml      : true,
      version    : 'v2.5'
    })
    FB.api(
      url,
      'GET',
      merge({
        access_token: BANANA,
        'fields': fields
      }, additional),
      function(response) {
        callback(response);
      }
    )
  };
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}


export function initSDK() {
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}
