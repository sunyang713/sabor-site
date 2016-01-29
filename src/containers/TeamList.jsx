import React from 'react'
import * as modalActions from 'actions/modal'
import reduxify from 'store/reduxify'
import Team from 'components/Team'


// an array of 'members'. each member is an array['name','position','bio']
import boardMembers from 'assets/board_info.json'

// An image array whose indices match with each member in <boardMembers>.
//      If image doesn't exist, will be substituted with placeholder.
const boardImages = boardMembers.map(
  member => {
    try {
      return require('assets/images/board-members/' + member[0] + '.jpg')
    } catch (e) {
      return require('assets/images/placeholder.png')
    }
  }
)

class TeamListContainer extends React.Component {

  render() {
    return (
      <Team
        boardMembers={ boardMembers }
        boardImages={ boardImages }
        modalActions={ this.props.modalActions }
      />
    )
  }
}


export default reduxify({
  component: TeamListContainer,
  state: 'none',
  actions: { modalActions }
})
