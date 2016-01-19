import { List, fromJS } from 'immutable'
import { ADD_EVENT, SET_EVENTS } from 'constants'

const initialState = List()

// TODO specify what an 'EVENT' looks like....
export default function events(state = initialState, action) {
  switch (action.type) {
  case ADD_EVENT:
    return state.push(fromJS(action.payload.event))
  case SET_EVENTS:
    return fromJS(action.payload.events)
  default:
    return state
  }
}

/*
  name: name,
  imgsrc: cover.source,
  date: moment(start_time).format('dddd, MMM Do'),
  start_time: moment(start_time).format('h:mma'),
  end_time: moment(end_time).format('h:mma'),
  place: place.name,
  rsvp: 'https://www.facebook.com/' + id,
  description: description
*/
