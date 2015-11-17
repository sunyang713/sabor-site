import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './modal.styl';


class MyModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: 'Title',
        description: 'Description',
        img: '',
        info: [
          { key: 'key1', value: 'value1' },
          { key: 'key2', value: 'value2' }
        ]
      },
    };
  }


  render() {

    let info = []
    /* props.info is an array
     * [ {key:'time', value: 111}, 
         {key:'date' value:222},
         {key:'description' value:'stuffff'},
         {key:'url', value:'www.com'} ]
     */
    for (let i in this.props.data.info)
      info.push(
        <div key={ this.props.data.info[i].key }>
          <p>
            <strong>{ this.props.data.info[i].key }: </strong>
            { this.props.data.info[i].value }
          </p>
        </div>
      )


    return (
      <Modal show={ this.props.show } onHide={ this.props.close } >

        <Modal.Header closeButton>
          <Modal.Title>{ this.props.data.title }</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="modal-section">
            <div className="modal-picture">
              <img src={ this.props.data.img } height="200" width="200" />
            </div>

            <div className="modal-info">
                { info }
            </div>
          </div>

          <hr />
          
          <div className="modal-description">
            <h4>Description</h4>
            <p>{ this.props.data.description }</p>
          </div>

        </Modal.Body>


      </Modal>
    )
  }
}

export default MyModal
