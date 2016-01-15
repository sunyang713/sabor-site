import React from 'react';
import boardMembers from 'assets/board_info.json';
import teamMembers from 'assets/team_info.json';

import { Jumbotron } from 'react-bootstrap';



export default class Team extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     id: '',
  //     name: '',
  //     description: ''
  //   };
  // }


  render() {

    let boardList = [];
    for (let member of boardMembers)
      boardList.push(
        <li key={ member.name } className="row">
          <div className="col-md-6">
            <p><strong>{ member.boardPosition }</strong></p>
          </div>
          <div className="col-md-6">
            <p>{ member.name }</p>
          </div>
        </li>
      );

    let teamListCol1 = [];
    for (let member of teamMembers)
      teamListCol1.push(
        <li key={ member }>
          <p>{ member }</p>
        </li>
      );

    let teamListCol2 = teamListCol1.splice(teamListCol1.length / 2, teamListCol1.length);

    return (
      <div>
        <div className="transparent-block" />
        <div className="content-wrapper">
          <h1>Board</h1>
          <hr />
          <ul className="list-unstyled">
            { boardList }
          </ul>
          <h1>Full Team</h1>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <ul className="list-unstyled">
                { teamListCol1 }
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                { teamListCol2 }
              </ul>
            </div>
          </div>
        </div>
        <div className="transparent-block" />
        <Jumbotron>
          <div className="content-wrapper">
            <h1>Interested in joining?</h1>
            <p>We hold auditions at the beginning of every semester. <a href="https://www.facebook.com/cusabor">Like us on facebook</a> to stay up to date!</p>
          </div>
        </Jumbotron>
        <div className="transparent-block" />

      </div>
    );
  }
}


