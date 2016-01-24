import {
  SHOW_MODAL,
  CLOSE_MODAL,
  SET_MODAL_TITLE,
  SET_MODAL_IMG_SRC,
  SET_MODAL_CONTENT,
  SET_MODAL_DESCRIPTION
} from 'constants'


export function showModal() {
  return {
    type: SHOW_MODAL
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export function handleClose() {
  return closeModal()
}


export function setModalContent(content) {
  return {
    type: SET_MODAL_CONTENT,
    payload: {
      content: content
    }
  }
}

export function setModalTitle(title) {
  return {
    type: SET_MODAL_TITLE,
    payload: {
      title: title
    }
  }
}

export function setModalImgSrc(imgsrc) {
  return {
    type: SET_MODAL_IMG_SRC,
    payload: {
      imgsrc: imgsrc
    }
  }
}

export function setModalInfo(info) {
  return {
    type: SET_MODAL_INFO,
    payload: {
      info: info
    }
  }
}

export function setModalDescription(description) {
  return {
    type: SET_MODAL_DESCRIPTION,
    payload: {
      description: description
    }
  }
}

