import React from 'react';
import { Modal, Button } from 'react-bootstrap';


class MyModal extends React.Component {

  defaultProps() {
    return {
      data: {
        title: 'Title',
        description: 'Description',
        imgurl: '',
        info: [
          { key: 'key1', value: 'value1' },
          { key: 'key2', value: 'value2' }
        ]
      },
    };
  }


  render() {

    // let imgurl = this.props.data.imgurl
    let info = []
    for (let i in this.props.data.info) // props.info is an array [ {key:'time', value: 111}, {key:'date' value:222}, {key:'description' value:'stuffff'}, {key:'url', value:'www.com'}]
      info.push(
        <li key={ this.props.data.info[i].key }>
          <h4>{ this.props.data.info[i].key }</h4>
          <p>{ this.props.data.info[i].value }</p>
        </li>
      )


    // TODO: make own actually good looking modal.
    // return (
    //   <div show={ this.props.show } className="my-modal">

    //   </div>
    // )

    return (
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton >
          <Modal.Title>{ this.props.data.title }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            { info }
          </ul>

          <hr />

          <h4>Description</h4>
          <p>{ this.props.description }</p>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default MyModal
