import React from 'react'
import Modal from 'react-modal'
import ModalContent from 'components/ModalContent'
import reduxify from 'store/reduxify'
import * as modalActions from 'actions/modal'


// TODO: stop background scrolloing
class ModalContainer extends React.Component {
  render() {
    const { modal, modalActions } = this.props
    return (
      <Modal
        className="container"
        isOpen={ modal.isOpen }
        onRequestClose={ modalActions.handleClose }
      >
        <ModalContent
          content={ modal.content }
          onClose={ modalActions.handleClose }
        />
      </Modal>
    )
  }
}

export default reduxify({
  component: ModalContainer,
  state: 'modal',
  actions: { modalActions }
})

