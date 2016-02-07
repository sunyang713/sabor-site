import Immutable from 'immutable'
import { SET_DESCRIPTION } from 'actions/constants'

const initialState = Immutable.Map({
  text: ''
})

// TODO specify what an 'EVENT' looks like....
export default function events(state = initialState, action) {
  switch (action.type) {
  case SET_DESCRIPTION:
    return state.set('text', action.payload.description)
  default:
    return state
  }
}
