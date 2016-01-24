import Immutable from 'immutable'
import { SET_BLURB } from 'constants'

const initialState = Immutable.Map({
  blurb: ''
})

// TODO specify what an 'EVENT' looks like....
export default function events(state = initialState, action) {
  switch (action.type) {
  case SET_BLURB:
    return Immutable.fromJS(action.payload)
  default:
    return state
  }
}
