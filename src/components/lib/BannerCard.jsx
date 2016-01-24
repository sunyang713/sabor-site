import React from 'react'

// TODO: add line breaks for txt files.
export default class BannerCard extends React.Component {
  render() {
    const { title, subtitle, imgsrc } = this.props
    const outerStyle = {
      textAlign: 'center',
      border: '1px solid black',
      borderRadius: '5px'
    }
    const imageStyle = {
      background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(0,0,0,1)), url(' + imgsrc + ')',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: 500,
      width: 'min-content',
      margin: '0 auto',
      borderRadius: '50px'
    }
    return (
      <div onClick={ this.handleClick() } style={ outerStyle }>
        <div style={ imageStyle } />
        <p>{ title }</p>
        <h5>{ subtitle }</h5>
      </div>
    )
  }
}


// TODO: Convert style to @media stuff classname HERO style.
// TODO: make CLICKABLE css, simple border radius colour change.
