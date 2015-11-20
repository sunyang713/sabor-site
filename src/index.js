import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import createHistory from 'history/lib/createHashHistory'; // sketchy af
let history = createHistory({ queryKey: false });

/* Shell */
import App from 'components/App';

/* Pages */
import FrontPage from 'components/FrontPage';
import Events from 'components/Events';
import Team from 'components/Team';
import Releve from 'components/Releve';




// Routes for modals??
const INDEX = (
  <Router history={ history }>
    <Route path="/" component={ App }>
      <IndexRoute component={ FrontPage } />
      <Route path="events" component={ Events } />
      <Route path="team" component={ Team } />
      <Route path="releve" component={ Releve } />
    </Route>
  </Router>
);

render(
  INDEX,
  document.getElementById('react-app')
);





