//TODO INSTLALL ESLINT THINGS

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Redirect, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import createHistory from 'history/lib/createBrowserHistory'
// import { createHistory } from 'history'
// import createHistory from 'history/lib/createHashHistory'
import useScroll from 'scroll-behavior/lib/useStandardScroll'
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
import 'assets/styles/global.css'


const App = ({ children }) => children
// const history = createHistory({ queryKey: false })
const history = useScroll(createHistory)()

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
      { IN_DEV_MODE && false ? <DevTools /> : null }
    </div>
  </Provider>
)

render(
  INDEX,
  document.getElementById('content')
)
