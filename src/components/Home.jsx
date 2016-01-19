import React from 'react'
import Cover from 'components/Cover'
import Events from 'containers/Events'
import Team from 'components/Team'
import Releve from 'components/Releve'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>{ 'Home' }</h1>
        <Cover />
        <Events />
        <Team />
        <Releve />
      </div>
    )
  }
}
