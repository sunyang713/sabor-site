import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux'
import events from './events'
import modal from './modal'
import latestEvent from './latestEvent'
import none from './none'

const rootReducer = combineReducers({
  routing,
  events,
  modal,
  latestEvent,
  none
})

export default rootReducer
