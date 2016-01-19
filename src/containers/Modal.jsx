import React from 'react'
import Modal from 'react-modal'
import ModalContent from 'components/ModalContent'
import reduxify from 'toolbox/reduxify'
import * as modalActions from 'actions/modal'


// TODO: stop background scrolloing
class ModalContainer extends React.Component {
  render() {
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        overflow              : 'visible',
        transform             : 'translate(-50%, -50%)'
      }
    }
    const { modal, actions } = this.props
    return (
      <Modal
        isOpen={ this.props.modal.get('isOpen') }
        onRequestClose={ actions.closeModal }
      >
        <ModalContent
          content={ modal.get('content').toJS() }
          onClose={ actions.closeModal }
        />
      </Modal>
    )
  }
}

export default reduxify({
  component: ModalContainer,
  reducers: ['modal'],
  actions: modalActions
})

/* react-modal default styles. Use this as a reference on what to override.
{
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }
}
*/
