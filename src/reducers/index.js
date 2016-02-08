import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux'
import events from './events'
import latestEvent from './latestEvent'
import description from './description'
import blurb from './blurb'
import none from './none'

const rootReducer = combineReducers({
  routing,
  events,
  latestEvent,
  description,
  blurb,
  none
})

export default rootReducer
