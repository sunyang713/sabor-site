import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'assets/styles/modal.styl'

class ModalContent extends React.Component {

  static propTypes = {
    content: React.PropTypes.shape({
      title: React.PropTypes.string,
      info: React.PropTypes.arrayOf(
        React.PropTypes.arrayOf(
          React.PropTypes.string
        )
      ),
      imgsrc: React.PropTypes.string,
      description: React.PropTypes.string
    }),
    onClose: React.PropTypes.func
  };

  render() {
    const { content, onClose } = this.props
    const { title, info, description, imgsrc } = content
    return (
      <div>
        <h2>{ title }</h2>
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
        <div className="u-pull-right">
          <button onClick={ onClose }>{ 'Close' }</button>
        </div>
      </div>
    )
  }
}

export default CSSModules(ModalContent, styles)
