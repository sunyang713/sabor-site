import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'assets/styles/event'

class Event extends React.Component {
  handleClick() {

  }

  render() {
    const { title, subtitle, imgsrc } = this.props
    const imageStyle = {
      backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(0,0,0,0.5)), url(' + imgsrc + ')'
    }
    return (
      <div className="section">
        <div styleName="event" onClick={ this.handleClick() }>
          <h3 className="section-heading">
            { 'Latest from Sabor!' }
          </h3>
          <img src={ imgsrc } />
          <p>{ title }</p>
          <p>{ subtitle }</p>
        </div>
      </div>
    )
  }

}

export default CSSModules(Event, styles)

// TODO: Convert style to @media stuff classname HERO style.
// TODO: make CLICKABLE css, simple border radius colour change.
