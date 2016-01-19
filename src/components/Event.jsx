import React from 'react'

export default class Event extends React.Component {
  render() {
    return (
      <div onClick={ this.props.onClick }>
        <h5>{ this.props.name }</h5>
      </div>
    )
  }
}
