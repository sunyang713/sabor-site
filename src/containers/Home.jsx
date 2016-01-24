import React from 'react'

/* Containers */
import LatestEvent from 'containers/LatestEvent'
import Team from 'containers/Team'

/* Components */
import Cover from 'components/Cover'
import Releve from 'components/Releve'

// TODO: add line breaks for txt files.
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Cover />
        <hr />
        <LatestEvent />
        <hr />
        <Team />
        <Releve />
      </div>
    )
  }
}
