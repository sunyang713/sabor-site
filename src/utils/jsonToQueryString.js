export default json => json ?
  Object.keys(json).map(key => 
    encodeURIComponent(key)
      + '='
      + encodeURIComponent(json[key])
  ).join('&')
: ''
