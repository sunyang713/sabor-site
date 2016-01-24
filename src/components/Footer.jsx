import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <p>
            <div className="u-pull-left">
              &copy;{ ' 2015 Sabor ' }
              &middot;
              <a href="https://www.facebook.com/cusabor">{ ' facebook ' }</a>
              &middot;
              <a href="http://twitter.com/SaborTweets">{ ' twitter ' }</a>
            </div>
            <div className="u-pull-right">
              <a href="http://jonathansun.me">{ 'Site designed by Jonathan' }</a>
            </div>
          </p>
        </div>
      </footer>
    )
  }
}
