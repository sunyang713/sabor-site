import React from 'react'
import ThumbnailCard from 'components/lib/ThumbnailCard'


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
    return (
      <div className={ this.props.className }>
        <h1>{ 'Team' }</h1>
        <div>
        { this.renderRows() }
        </div>
      </div>
    )
  }
}
