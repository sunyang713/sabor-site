import Immutable from 'immutable'
import { SET_LATEST_EVENT, SET_EXISTING } from 'actions/constants'

const initialState = Immutable.Map({
  exists: false,
  title: '',
  imgsrc: '',
  date: '',
  start_time: '',
  end_time: '',
  place: '',
  link: '',
  description: ''
})

// TODO specify what an 'EVENT' looks like....
export default function events(state = initialState, action) {
  switch (action.type) {
  case SET_LATEST_EVENT:
    return Immutable.fromJS(action.payload.event)
  case SET_EXISTING:
    return state.set('exists', true)
  default:
    return state
  }
}