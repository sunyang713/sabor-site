import React from 'react'

export default class Blurb extends React.Component {

  handleClick() {
    return () => this.props.push('/about')
  }

  render() {

    return (
      <div className="container">
        <h1>{ this.props.text }</h1>
        <p>
          <a className="button button-primary" href="https://www.facebook.com/cusabor">
            { 'Follow us on Facebook' }
          </a>
          <button onClick={ this.handleClick() }>
            { 'Learn More' }
          </button>
        </p>
      </div>
    )
  }
}
