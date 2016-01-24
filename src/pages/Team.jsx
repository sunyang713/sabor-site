import React from 'react'

/* Containers */
import Modal from 'containers/Modal'
import TeamList from 'containers/TeamList'

// TODO: add line breaks for txt files.
export default class Team extends React.Component {
  render() {
    return (
      <div>
        <Modal />
        <h1>{ 'Meet the team' }</h1>
        <TeamList />
      </div>
    )
  }
}
