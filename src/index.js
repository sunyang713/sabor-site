import React from 'react';
import { render } from 'react-dom';

import Navbar from 'components/navbar';
import Dyno from 'components/dyno';
import Footer from 'components/footer';

class App extends React.Component {
  render() {
    return (
      <div>
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
