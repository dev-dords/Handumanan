import { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class ModalClass extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.message}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.props.handleSave}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default ModalClass;
