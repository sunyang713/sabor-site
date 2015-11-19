import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap'

import Cover from './cover'
import Events from './events'
import InfoCard from './info-card'


class FrontPage extends React.Component {


  render() {
    var divStyle = {
      color: 'white',
      backgroundImage: 'url(' + 'imgUrl' + ')',
      WebkitTransition: 'all', // note the capital 'W' here
      msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    }

    return (
      <div className="dyno">
        <Cover FB={ this.props.FB } token={ this.props.token } />


        <InfoCard
          FB={ this.props.FB}
          token={ this.props.token} />

        <div className="content-wrapper">

          <div style={divStyle}>inline style test</div>

          <Events
            FB={ this.props.FB }
            openModal={ this.props.openModal }
            closeModal={ this.props.closeModal }
            token={ this.props.token } />

        </div>

        <div className="transparent-block" />

      </div>
    )
  }
}

export default FrontPage


