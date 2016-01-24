import React from 'react'
import { initSDK } from 'actions/fbapi'

export default class FacebookBanner extends React.Component {

  componentDidMount() {
    initSDK()
  }

  render() {
    return (
      <div>
        <h1>{ 'See the Latest' }</h1>
        <div
          className="fb-like"
          data-href="http://www.columbia.edu/cu/sabor"
          data-layout="standard"
          data-action="like"
          data-show-faces="true"
        />
        <div
          className="fb-like"
          data-href="https://www.facebook.com/cusabor"
          data-share="true"
          data-layout="button_count"
          data-show-faces="true"
          data-colorscheme="dark"
        />



        <div
          className="fb-page"
          data-href="https://www.facebook.com/cusabor"
          data-width="500"
          data-height="130"
          data-hide-cover="false"
          data-show-facepile="false"
          data-show-posts="false"
        />



      </div>
    )
  }
}


          // data-small-header="true"
