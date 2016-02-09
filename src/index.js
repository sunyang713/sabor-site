/* global __DEV__ */
import React from 'react'
import { render } from 'react-dom'
import createHistory from 'history/lib/createHashHistory'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'

import ROOT from 'containers/Root'

if (__DEV__) {
  const RedBox = require('redbox-react')
  try {
    render(ROOT, document.getElementById('root'))
  } catch (e) {
    render(<RedBox error={ e } />, document.getElementById('root'))
  }
} else {
  React.render(ROOT, document.getElementById('root'))
}
