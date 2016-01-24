import { SET_BLURB } from 'constants'
import { fbapi } from 'actions/fbapi'

export function setBlurb(blurb) {
  return {
    type: SET_BLURB,
    payload: {
      blurb: blurb
    }
  }
}

export function pullBlurb() {
  return (dispatch) => {
    fbapi({
      url: '/cusabor/',
      fields: 'name,about',
      callback: function(response) {
        dispatch(setBlurb(response.about));
      }
    })
  }
}
