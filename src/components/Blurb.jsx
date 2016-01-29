import React from 'react'

export default class Blurb extends React.Component {

  handleClick() {
    return () => this.props.push('/about')
  }

  render() {

    return (
      <div className="section">
        <div className="container">
          <h3 className="section-heading">
            { 'Blurb' }
          </h3>
          <p className="section-description">
            { "Sabor is Columbia University's First Latino Dance Troupe. Established in 2003, Sabor performs salsa, bachata, merengue, and many other styles of dance." }
          </p>
          <a className="button button-primary" href="https://www.facebook.com/cusabor">
            { 'Follow us' }
          </a>
          <a className="button" onClick={ this.handleClick() }>
            { 'Learn More' }
          </a>
        </div>
      </div>
    )
  }
}
