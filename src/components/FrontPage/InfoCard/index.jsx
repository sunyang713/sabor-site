import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

export default class InfoCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      calledFB: false,
      name: '',
      description: '',
    };
  }

  getData() {
    this.props.FB.api(
      '/cusabor/',
      'GET',
      {
        access_token: this.props.token,
        "fields":"name,about"
      },
      function(response) {
        this.setState({
          name: response.name,
          about: response.about,
          calledFB: true
        });
      }.bind(this)
    );
  }


  render() {

    if (Object.keys(this.props.FB).length !== 0 && !this.state.calledFB)
      this.getData();

    return (
      <div>

        <Jumbotron>
          <div className="content-wrapper">
            <p>{ this.state.about }</p>
            <p><Button>Learn more</Button></p>
          </div>
        </Jumbotron>

      </div>
    )
  }
}




