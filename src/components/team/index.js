import React from 'react'
import team from 'team-info.json'


class TeamInfo extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     id: '',
  //     name: '',
  //     description: ''
  //   };
  // }


  render() {

    let members = []
    for (var member of team) {
      members.push(
        <li key={ JSON.stringify(member) }>
          <p>{ member.name }</p>
        </li>
      )
    }

    return (
      <div>
        <div className="transparent-block" />
        <div className="content-wrapper">
          <p>Team Info</p>
          <ul>
            { members }
          </ul>
        </div>
      </div>
    )
  }
}

export default TeamInfo;

