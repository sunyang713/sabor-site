import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import events from './events'
import modal from './modal'
import latestEvent from './latestEvent'
import blurb from './blurb'
import none from './none'

const rootReducer = combineReducers({
  routing: routeReducer,
  events,
  modal,
  latestEvent,
  blurb,
  none
})

export default rootReducer
