import React from 'react';


class Event extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      description: ''
    };
  }

  componentDidMount() {
    this.props.FB.api(
      this.props.id,
      'GET',
      { access_token: this.props.token },
      function(response) {
        this.setState({
          name: response.name,
          description: response.description
        })
      }.bind(this)
    )
  }

  render() {
    return (
      <div>
        <p>Name: { this.state.name }</p>
      </div>
    )
  }
}

export default Event;

