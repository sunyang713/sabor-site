import React from 'react'

/* Containers */
import Navbar from 'containers/Navbar'
// import TeamList from 'containers/TeamList'

import BoardList from 'components/BoardList'
import TeamList from 'components/TeamList'
import Footer from 'components/Footer'

// TODO: add line breaks for txt files.
export default class Team extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <BoardList />
        <TeamList />
        <Footer />
      </div>
    )
  }
}
