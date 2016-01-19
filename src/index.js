//TODO INSTLALL ESLINT THINGS

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import createHistory from 'history/lib/createHashHistory'
import configureStore from 'store/configureStore'

// TODO: use fbgraph, add like/share buttons

/* Containers */
import App from 'containers/App' // primary shell
// import Events from 'containers/Events'
// import Media from 'containers/Media'
import DevTools from 'containers/DevTools'

/* Components */
import Home from 'components/Home'
// import Team from 'components/Team';
// import Releve from 'components/Releve';
import NotFound from 'components/NotFound'

/* Global styles */
import 'assets/css/normalize.css'
import 'assets/css/skeleton.css'

// const INDEX = (
//   <Provider store={ store }>
//     <div>
//       <Router history={ history }>
//         <Route path="/" component={ App }>
//           <IndexRoute component={ Home } />
//           <Route path="team" component={ Team } />
//           <Route path="releve" component={ Releve } />
//           <Route path="*" component={ NotFound } />
//         </Route>
//       </Router>
//       <DevTools />
//     </div>
//   </Provider>
// )

const hashHistory = createHistory({ queryKey: false })

const INDEX = (
  <Provider store={ configureStore(hashHistory) }>
    <div>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home } />
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
