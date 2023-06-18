import { Button, Modal } from 'react-bootstrap';
const ModalClass = (props) => {
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={props.handleSave}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ModalClass;
