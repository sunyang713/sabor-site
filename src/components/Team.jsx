import React from 'react'
import ThumbnailCard from 'components/lib/ThumbnailCard'
import teamMembers from 'assets/team_info.json';


export default class Team extends React.Component {

  handleClick(member, imgsrc) {
    const { modalActions } = this.props
    return () => {
      modalActions.setModalContent({
        title: member[0],
        imgsrc: imgsrc,
        description: member[2],
        info: [
          ['', member[1]]
        ]
      })
      modalActions.showModal()
    }
  }

  renderRow(row) {
    const newRow = []
    const { boardMembers, boardImages } = this.props
    boardMembers.forEach(
      (member, index) => {
        if (Math.trunc(index / 3) === row) {
          newRow.push(
            <div key={ member[0] }>
              <ThumbnailCard
                key={ member[0] }
                imgsrc={ boardImages[index] }
                title={ member[0] }
                subtitle={ member[1] }
                handleClick={ this.handleClick(member, boardImages[index]) }
              />
            </div>
          )
        }
      }
    )
    return newRow
  }


  renderRows() {
    const rows = []
    for (let row = 0; row < this.props.boardMembers.length / 3; row++) {
      rows.push(
        <div key={ 'row' + row } className="row">
          { this.renderRow(row) }
        </div>
      )
    }
    return rows
  }




  render() {
    let teamListCol1 = [];
    for (let member of teamMembers)
      teamListCol1.push(
        <li key={ member }>
          <p>{ member }</p>
        </li>
      );

    let teamListCol2 = teamListCol1.splice(teamListCol1.length / 2, teamListCol1.length);

    // const styles = {
    //   list
    // }

    return (
      <div>
        <h1>{ 'Team' }</h1>
        <div>
        { this.renderRows() }
        </div>
        <div className="row">
          <div className="six columns">
            <ul className="list-unstyled">
              { teamListCol1 }
            </ul>
          </div>
          <div className="six columns">
            <ul className="list-unstyled">
              { teamListCol2 }
            </ul>
          </div>
        </div>  
      </div>
    )
  }
}
