/*
 * Converts a json object to a query string.
 * i.e. from this:
 * { query1: 'dog', query2: '13', query3: 'carrot' }
 * to this:
 * 'query1=dog&query2=13&query3=carrot'
 */
export default json => json ?
  Object.keys(json).map(key => 
    encodeURIComponent(key)
      + '='
      + encodeURIComponent(json[key])
  ).join('&')
: ''
