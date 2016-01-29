import React from 'react'
import reduxify from 'store/reduxify'
import { APPLE, BANANA } from 'FRUIT_BASKET'

// import * as fbActions from 'actions/fb'


export default class FBContainer extends React.Component {
  // constructor(props) {
  //   super(props)
  //   window.fbAsyncInit = function() {
  //     FB.init({
  //       appId      : APPLE,
  //       xfbml      : true,
  //       version    : 'v2.5'
  //     })
  //   };
  //   (function(d, s, id){
  //     var js, fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) {return;}
  //     js = d.createElement(s); js.id = id;
  //     js.src = "//connect.facebook.net/en_US/sdk.js";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   }(document, 'script', 'facebook-jssdk'));
  // }
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

// export default reduxify({
//   component: FBContainer,
//   state: 'none',
//   actions: { fbActions }
// })

