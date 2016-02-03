import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Redirect, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import createHistory from 'history/lib/createHashHistory'
import configureStore from 'store/configureStore'

/* Pages */
import Home from 'pages/Home'
import Team from 'pages/Team'
import Releve from 'pages/Releve'
import NotFound from 'pages/NotFound'

/* Redux DevTools */
import DevTools from 'containers/DevTools'

/* Global styles */
import 'normalize.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'assets/css/custom.css'

const App = ({ children }) => children
const history = createHistory({ queryKey: false })

const INDEX = (
  <Provider store={ configureStore(history) }>
    <div>
      <Router history={ history }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home } />
          <Redirect from="home" to="/" />
          <Route path="team" component={ Team } />
          <Route path="releve" component={ Releve } />
          <Route path="*" component={ NotFound } />
        </Route>
      </Router>
      { __DEV__ ? <DevTools /> : null }
    </div>
  </Provider>
)

if (__DEV__) {
  const RedBox = require('redbox-react')
  try {
    render(INDEX, document.getElementById('root'))
  } catch (e) {
    render(<RedBox error={ e } />, document.getElementById('root'))
  }
} else {
  React.render(INDEX, document.getElementById('root'))
}
