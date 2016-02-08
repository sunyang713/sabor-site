import Immutable from 'immutable'
import { SET_BLURB } from 'actions/constants'

const initialState = Immutable.Map({
  text: ''
})

// TODO specify what an 'EVENT' looks like....
export default function events(state = initialState, action) {
  switch (action.type) {
  case SET_BLURB:
    return state.set('text', action.payload.blurb)
  default:
    return state
  }
}
