import { Button, Container } from 'react-bootstrap';
import { QrReader } from 'react-qr-reader';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import ModalClass from './modalclass';
const ScanPage = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const [orientation, setOrientation] = useState('user');
  const webcamScan = async (scanData) => {
    if (scanData && scanData !== '') {
      console.log(scanData.text);
      axios
        .get(
          'https://asia-south1.gcp.data.mongodb-api.com/app/handumananapi-ifmzb/endpoint/attendee',
          {
            params: {
              id: scanData.text,
            },
          }
        )
        .then((response) => {
          setMessage(response.data);
          setShow(true);
        });
    }
  };
  const handleError = (err) => {
    console.log(err);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <Container
      fluid="sm"
      className="main-container justify-content-center text-align-center"
      style={{ maxWidth: '800px' }}
    >
      <ModalClass
        title="QR Scan Result"
        message={message}
        handleClose={handleClose}
        handleSave={handleClose}
        show={show}
        cancelButton={false}
      />
      <Row>
        <h3 className="text-center text-sm-start notes-text">
          QR Code Scanner
        </h3>
      </Row>
      <Row className="row shadow-lg p-5 rounded justify-content-center form-container">
        <Col md={8}>
          <QrReader
            delay={500}
            onError={handleError}
            onScan={webcamScan}
            onResult={webcamScan}
            // constraints={{facingMode:orientation}}
            facingMode={orientation}
            style={{ width: '200px', heigth: '100px' }}
          ></QrReader>
        </Col>
      </Row>
    </Container>
  );
};

export default ScanPage;
