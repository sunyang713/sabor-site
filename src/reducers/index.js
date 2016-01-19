import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router' // REMEMBER
import events from './events'
import modal from './modal'

const rootReducer = combineReducers({
  routing: routeReducer,
  events,
  modal
})

export default rootReducer
