import jsonToQueryString from 'utils/jsonToQueryString'

export default function fbapi (path, queryParams, callback) {
  fetch(`https://graph.facebook.com/v2.8/cusabor/${ path }?${ jsonToQueryString(queryParams) }&access_token=${ process.env.FB_ACCESS_TOKEN }`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }).then(response => {
    return response.json()
  }, error => {
    // TODO improve this
    console.log('whooops')
    console.log(error.message)
  }).then(json => {
    callback(json)
  })
}
