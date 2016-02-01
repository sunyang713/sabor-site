import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'assets/styles/event'

class Event extends React.Component {
  render() {
    const { title, description, imgsrc, link } = this.props
    const imageStyle = {
      backgroundImage: 'url(' + imgsrc + ')'
    }
    return (
      <div className="section" styleName="coloured-backdrop">
        <div className="center-block">
          <a href={ link } styleName="link">
            <img
              src={ imgsrc }
              className="img-responsive img-thumbnail"
              styleName="image"
              alt="Latest event"
            />
          </a>
        </div>
        <div styleName="center">
          <h3 className="text-justify" styleName="description"><em>{ description }</em></h3>
        </div>
      </div>
    )
  }

}

export default CSSModules(Event, styles)

// TODO: Convert style to @media stuff classname HERO style.
// TODO: make CLICKABLE css, simple border radius colour change.
