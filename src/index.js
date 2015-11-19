import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory' // sketchy af

// import Index from 'components/index'
import App from 'components/app'
// import Navbar from 'components/navbar'

/* Pages */
import FrontPage from 'components/front-page'
import Team from 'components/team'
// import Media from 'components/media'
// import Events from 'components/front-page/events'
// import Event from 'components/front-page/events/event'
import Releve from 'components/releve'



import 'bootstrap/dist/css/bootstrap.min.css' // sketchy, inefficient
import './base.styl'

import 'styles/main.css'
// import 'dev.css'


// const routes = (
//   <Router>
//     <Route path="/" component={ App }>
//       <IndexRoute component={ FrontPage }>
//       <
//       
//     </Route>
//   </Router>
// )

// Routes for modals??
const routes = (
  <Router history={ createBrowserHistory() }>
    <Route path="/" component={ App }>
      <IndexRoute component={ FrontPage } />
      <Route path="team" component={ Team } />
      <Route path="releve" component={ Releve } />
    </Route>
  </Router>
)

render(
  routes,
  document.getElementById('react-app')
)





