import { Component } from 'react';
import { Container } from 'react-bootstrap';
import { QrReader } from 'react-qr-reader';
import { Row, Col } from 'react-bootstrap';
class ScanPage extends Component {
  constructor(props) {
    super(props);
    this.webcamError = this.webcamError.bind(this);
    this.webcamScan = this.webcamScan.bind(this);
    this.state = {
      webcamResult: '',
    };
  }
  webcamError(error) {
    console.log(error);
    if (error) {
      this.setState({ webcamError: error });
    }
  }
  webcamScan(result) {
    console.log(result);
    if (result) {
      this.setState({ webcamResult: result });
    }
  }
  render() {
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
              delay={300}
              onError={this.webcamError}
              onScan={this.webcamScan}
              facingMode={'user'}
            ></QrReader>
          </Col>
        </Row>
        <Row>{this.state.webcamResult}</Row>
      </Container>
    );
  }
}
export default ScanPage;
