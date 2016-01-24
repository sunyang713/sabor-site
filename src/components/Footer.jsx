import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="u-pull-left">
            <p>
              &copy;{ '2015 Sabor' }
              &middot;
              <a href="https://www.facebook.com/cusabor">{ 'facebook' }</a>
              &middot;
              <a href="http://twitter.com/SaborTweets">{ 'twitter' }</a>
            </p>
          </div>
          <div className="u-pull-right">
            <a href="http://jonathansun.me">{ 'Site designed by Jonathan' }</a>
          </div>
        </div>
      </footer>
    )
  }
}
