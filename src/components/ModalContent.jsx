import React from 'react'

export default class ModalContent extends React.Component {
  render() {
    const { content, onClose } = this.props
    const { name, info, description, imgsrc } = content
    return (
      <div>
        <h2>{ name }</h2>
        <img src={ imgsrc } />
        <div>
          {
            info.map(
              (item) => (
                <p key={ item[0] }>
                  <strong>{ item[0] }</strong>
                  { item[1] }
                </p>
              )
            )
          }
        </div>
        <div>
          <p>{ description }</p>
        </div>
        <button onClick={ onClose }>{ 'Close' }</button>
      </div>
    )
  }
}
