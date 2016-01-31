import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux'
import events from './events'
import latestEvent from './latestEvent'
import none from './none'

const rootReducer = combineReducers({
  routing,
  events,
  latestEvent,
  none
})

export default rootReducer
