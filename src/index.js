//TODO INSTLALL ESLINT THINGS

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import createHistory from 'history/lib/createHashHistory'
import configureStore from 'store/configureStore'

// TODO: use fbgraph, add like/share buttons

/* Pages */
import Home from 'pages/Home'
import Team from 'pages/Team'
import Releve from 'pages/Releve'
import NotFound from 'pages/NotFound'

import DevTools from 'containers/DevTools'


/* Global styles */
import 'assets/css/normalize.css'
import 'assets/css/skeleton.css'
// import 'assets/styles/global'


const App = ({ children }) => children

const hashHistory = createHistory({ queryKey: false })

const INDEX = (
  <Provider store={ configureStore(hashHistory) }>
    <div>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home } />
          <Route path="team" component={ Team } />
          <Route path="releve" component={ Releve } />
          <Route path="*" component={ NotFound } />
        </Route>
      </Router>
      { IN_DEV_MODE ? <DevTools /> : null }
    </div>
  </Provider>
)

render(
  INDEX,
  document.getElementById('content')
)
