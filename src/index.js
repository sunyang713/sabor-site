import React from 'react';
import { render } from 'react-dom';

import Navbar from 'components/navbar';
import Dyno from 'components/dyno';
import Footer from 'components/footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // sketchy, inefficient
// import '../static/css/cover.css'
import '../static/css/main.css'


class App extends React.Component {
  render() {
    return (
      <div className="site-wrapper">
        <Navbar />
        <Dyno />
        <Footer />
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('react-app')
)
