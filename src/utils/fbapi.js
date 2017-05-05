import jsonToQueryString from 'utils/jsonToQueryString'

export default function fbapi (path, queryParams, callback) {
  return fetch(
    `https://graph.facebook.com/v2.8/${ path }?${ jsonToQueryString(queryParams) }&access_token=${ process.env.FACEBOOK_ACCESS_TOKEN }`,
    { method: 'GET' }
  ).then(
    response => response.json()
  ).then(
    callback
  )
}
