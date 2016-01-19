import { Map, fromJS } from 'immutable'
import { STORE } from 'constants'

const initialState = Map({})

export default function fbStore(state = initialState, action) {
  switch (action.type) {
  case STORE:
    return state.set(action.key, fromJS(action.payload))
  default:
    return state
  }
}
