import React from 'react';


class Event extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { };
  // }

  // componentDidMount() {

  // }

  render() {

    var event = this.props.data;
    var name = event.name;
    var description = event.description;

    return (
      <div>
        <p>name: { name }</p>
        <p>description: { description }</p>
      </div>
    )
  }
}

export default Event;

