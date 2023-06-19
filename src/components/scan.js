import { Container } from 'react-bootstrap';
import { QrReader } from 'react-qr-reader';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import ModalClass from './modalclass';
const ScanPage = () => {
  const [data, setData] = useState('');
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const webcamScan = async (scanData) => {
    if (scanData && scanData !== '') {
      setData(scanData);
      axios
        .get(
          'https://asia-south1.gcp.data.mongodb-api.com/app/handumananapi-ifmzb/endpoint/attendee',
          {
            params: {
              id: {scanData},
            },
          }
        )
        .then((response) => {
          if (response.data === 'true') {
            setMessage('Welcome registered guest!');
          } else {
            setMessage('Guest is not registered.');
          }
          setShow(true);
          console.log(response);
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
      className="mainContainer justify-content-center text-align-center"
      style={{ maxWidth: '800px' }}
    >
      <ModalClass
        title="QR Scan Result"
        message={message}
        handleClose={handleClose}
        handleSave={handleClose}
        show={show}
        confirmButton={false}
      />
      <Row>
        <h3 className="text-center text-sm-start text-muted">
          QR Code Scanner
        </h3>
      </Row>
      <Row className="row shadow-lg p-5 bg-white rounded justify-content-center">
        <Col md={8}>
          <QrReader
            delay={500}
            onError={handleError}
            onScan={webcamScan}
            onResult={webcamScan}
            facingMode={'user'}
          ></QrReader>
        </Col>
      </Row>
    </Container>
  );
};

export default ScanPage;
