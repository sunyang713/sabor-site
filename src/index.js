import React from 'react';
import { render } from 'react-dom';

import Navbar from 'components/navbar';
import Dyno from 'components/dyno';
import Footer from 'components/footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // sketchy, inefficient

import './dev.css';



class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="site-wrapper">
          <Dyno />
        </div>
        <Footer />
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('react-app')
)

