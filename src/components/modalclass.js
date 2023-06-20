import { Button, Modal } from 'react-bootstrap';
const ModalClass = (props) => {
  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        className="modalComponent"
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.message}</Modal.Body>
        <Modal.Footer>
          {props.cancelButton && (
            <Button variant="secondary" onClick={props.handleClose}>
              Cancel
            </Button>
          )}
          <Button className="btnHandumanan" onClick={props.handleSave}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ModalClass;
