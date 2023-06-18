import { Component } from 'react';
import { Container } from 'react-bootstrap';
import { QrReader } from 'react-qr-reader';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
const ScanPage = () => {
  const [data, setData] = useState('');
  const webcamScan = async (scanData) => {
    if (scanData && scanData !== '')
      setData(scanData).then(console.log(scanData));
  };
  const handleError = (err) => {
    console.log(err);
  };
  return (
    <Container
      fluid="sm"
      className="mainContainer justify-content-center text-align-center"
      style={{ maxWidth: '800px' }}
    >
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
      <Row>{data}</Row>
    </Container>
  );
};

export default ScanPage;
