import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'assets/styles/highlight'

class Highlight extends React.Component {
  handleClick() {
    return () => this.props.push(this.props.path)
  }

  render() {
    const { imgsrc, text } = this.props
    const imageStyle = { backgroundImage: 'url(' + imgsrc + ')' }
    return (
      <div>
        <div
          styleName="image"
          className="u-max-full-width"
          style={ imageStyle }
          onClick={ this.handleClick() }
        >
          <h4 styleName="text" className="u-pull-right">{ text }</h4>
        </div>
      </div>
    )
  }
}

export default CSSModules(Highlight, styles)
