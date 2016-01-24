import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import events from './events'
import modal from './modal'
import latestEvent from './latestEvent'
import none from './none'

const rootReducer = combineReducers({
  routing: routeReducer,
  events,
  modal,
  latestEvent,
  none
})

export default rootReducer
