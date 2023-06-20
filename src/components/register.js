import { Component, createRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { QRCodeCanvas } from 'qrcode.react';
import { sha1 } from 'crypto-hash';
import axios from 'axios';
import ModalClass from './modalclass';
import { jsPDF } from 'jspdf';
class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      year: '',
      email: '',
      qrval: '',
      generated: false,
      empty: true,
      show: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.hashEmail = this.hashEmail.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.downloadQR = this.downloadQR.bind(this);
    this.qrImg = createRef();
  }
  onSubmitHandler(e) {
    this.handleShow();
    e.preventDefault();
  }
  handleChange(e) {
    if (e.target.name !== 'Year') {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
    if (e.target.name === 'email') {
      this.setState({ generated: false });
    } else if (e.target.name === 'Year') {
      this.setState({ year: e.target.value.toString() });
    }
    if (e.target.value === '') {
      this.setState({ empty: true });
    } else {
      this.setState({ empty: false });
    }
  }
  async hashEmail(e) {
    let value = await sha1(this.state.email);
    this.setState({ qrval: value, generated: true });
  }
  handleShow() {
    this.setState({ show: true });
  }
  handleClose() {
    this.setState({ show: false });
  }
  handleSave() {
    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      year: this.state.year,
      email: this.state.email,
      hashedid: this.state.qrval,
    };
    axios
      .post(
        'https://asia-south1.gcp.data.mongodb-api.com/app/handumananapi-ifmzb/endpoint/register',
        data
      )
      .then(() => {
        this.downloadQR();
      })
      .then(() => {
        this.setState({
          firstname: '',
          lastname: '',
          email: '',
          qrval: '',
          show: false,
        });
      });
  }
  downloadQR() {
    var doc = new jsPDF();
    doc.text(10, 10, 'Handumanan: Saramok Ticket Receipt');
    doc.text(10, 20, 'Guest Details:');
    doc.text(10, 30, `${this.state.firstname} ${this.state.lastname}`);
    doc.text(10, 40, `${this.state.year}`);
    doc.text(10, 50, `${this.state.email}`);
    doc.text(10, 60, 'Kindly show this qr code upon arrival at the venue.');
    let canvas = this.qrImg.current.querySelector('canvas');
    let image = canvas.toDataURL('image/jpeg');
    doc.addImage(image, 'JPEG', 50, 70, 50, 50);
    doc.save('qr.pdf');
  }
  render() {
    const qrcode = (
      <QRCodeCanvas
        id="qrCode"
        value={this.state.qrval}
        size={150}
        bgColor={'#FFFFFF'}
        level={'H'}
      />
    );
    return (
      <Container
        fluid="sm"
        className="main-container justify-content-center text-align-center"
        style={{ maxWidth: '800px' }}
      >
        <ModalClass
          title="Please confirm"
          message="Do you want to proceed with the registration"
          handleClose={this.handleClose}
          handleSave={this.handleSave}
          show={this.state.show}
          cancelButton={true}
        />
        <Row>
          <h3 className="text-center text-sm-start container-header">
            Registration Form
          </h3>
        </Row>
        <Form
          className="row shadow-lg p-5 rounded form-container"
          onSubmit={(e) => this.onSubmitHandler(e)}
        >
          <Col sm={12} md={8}>
            <Form.Group as={Row} className="my-3 ">
              <Form.Label column sm={3}>
                First Name:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="my-3 ">
              <Form.Label column sm={3}>
                Last Name:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="my-3 ">
              <Form.Label column sm={3}>
                Year:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="number"
                  min="1994"
                  max="2023"
                  step="1"
                  name="Year"
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="my-3">
              <Form.Label column sm={3}>
                Email:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </Col>
            </Form.Group>
          </Col>
          <Col sm={12} md={4}>
            <Form.Group as={Row} className="my-3">
              <Form.Label column sm={3}>
                QR:
              </Form.Label>
            </Form.Group>
            <div className="qrcode__container text-center" ref={this.qrImg}>
              {qrcode}
            </div>
          </Col>
          <Row className="justify-content-center">
            <Button
              className="btnHandumanan"
              type="button"
              size="md"
              disabled={this.state.empty}
              onClick={this.hashEmail}
            >
              Generate
            </Button>
            {this.state.generated && !this.state.empty && (
              <Button
                className="btnHandumanan"
                disabled={this.state.empty}
                type="submit"
              >
                Submit
              </Button>
            )}
          </Row>
        </Form>
      </Container>
    );
  }
}
export default RegisterPage;
