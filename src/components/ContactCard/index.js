import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

export default class ContactCard extends React.Component {


  render() {
    return (
      <div>

        <Jumbotron>
          <div className="content-wrapper text-center">
            <h1>Want a taste?</h1>
            <p>sabor.board@gmail.com</p>
          </div>
        </Jumbotron>

      </div>
    )
  }
}




