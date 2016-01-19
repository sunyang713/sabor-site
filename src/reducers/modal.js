import { fromJS } from 'immutable'
import {
  SHOW_MODAL,
  CLOSE_MODAL,
  SET_MODAL_CONTENT,
  SET_MODAL_TITLE,
  SET_MODAL_IMG_SRC,
  SET_MODAL_INFO,
  SET_MODAL_DESCRIPTION
} from 'constants'

const initialState = fromJS({
  isOpen: false,
  content: {
    title: '',
    imgsrc: '',
    info: [], // will be an array of 'tuples' (faked with a two-element array)
    description: ''
  }
})

export default function question(state = initialState, action) {
  switch (action.type) {
  case SHOW_MODAL:
    return state.set('isOpen', true)
  case CLOSE_MODAL:
    return state.set('isOpen', false)
  case SET_MODAL_CONTENT:
    return state.set('content', fromJS(action.payload.content))
  case SET_MODAL_TITLE:
    return state.updateIn(['data', 'title'], action.payload.title)
  case SET_MODAL_IMG_SRC:
    return state.updateIn(['data', 'imgsrc'], action.payload.imgsrc)
  case SET_MODAL_INFO:
    return state.updateIn(['data', 'info'], fromJS(action.payload.info))
  case SET_MODAL_DESCRIPTION:
    return state.updateIn(['data', 'description'], action.payload.description)
  default:
    return state
  }
}
