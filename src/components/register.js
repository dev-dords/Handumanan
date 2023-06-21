import { Component, createRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { QRCodeCanvas } from 'qrcode.react';
import { sha256 } from 'crypto-hash';
import axios from 'axios';
import ModalClass from './modalclass';
import { jsPDF } from 'jspdf';
import { ticketbase } from './ticketbase64';
class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      year: '',
      email: '',
      qrval: '',
      empty: true,
      show: false,
      referencenum: '',
      mop: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.hashEmail = this.hashEmail.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.downloadQR = this.downloadQR.bind(this);
    this.handlePaste = this.handlePaste.bind(this);
    this.handleEmpty = this.handleEmpty.bind(this);
    this.qrImg = createRef();
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.hashEmail();
  }
  handleEmpty() {
    if (
      (this.state.mop !== null || this.state.mop !== '') &&
      this.state.firstname !== '' &&
      this.state.lastname !== '' &&
      this.state.year !== null &&
      this.state.email !== '' &&
      this.state.referencenum !== ''
    ) {
      this.setState({ empty: false });
    }
  }
  handlePaste(e) {
    this.setState({
      [e.target.name]: e.clipboardData.getData('text'),
    });
    this.handleEmpty();
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value.toString(),
    });
    this.handleEmpty();
    if (e.target.value.toString() === '') {
      this.setState({ empty: true });
    }
  }
  async hashEmail() {
    let value = await sha256(this.state.email);
    this.setState({ qrval: value });
    this.handleShow();
  }
  handleShow() {
    this.setState({ show: true });
  }
  handleClose() {
    this.setState({
      show: false,
      firstname: '',
      lastname: '',
      email: '',
      qrval: '',
      referencenum: '',
      empty: true,
    });
  }
  handleSave() {
    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      year: this.state.year,
      email: this.state.email,
      hashedid: this.state.qrval,
      mop: this.state.mop,
      referencenum: this.state.referencenum,
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
        this.handleClose();
      });
  }
  downloadQR() {
    var doc = new jsPDF();
    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();

    var imgData = 'data:image/png;base64,' + ticketbase;
    doc.addImage(imgData, 0, 0, width, height);
    doc.text(50, 109, `${this.state.firstname} ${this.state.lastname}`);
    doc.text(50, 120, `${this.state.year}`);
    doc.text(50, 133, `${this.state.email}`);
    doc.text(90, 167, `${this.state.mop}`);
    doc.text(90, 176, `${this.state.referencenum}`);
    let canvas = this.qrImg.current.querySelector('canvas');
    let image = canvas.toDataURL('image/jpeg');
    doc.addImage(image, 'JPEG', 138, 203, 50, 50);
    doc.save('Saramok Ticket.pdf');
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
                  onPaste={this.handlePaste}
                  autoComplete="off"
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
                  onPaste={this.handlePaste}
                  autoComplete="off"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="my-3 ">
              <Form.Label column sm={3}>
                Batch:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="number"
                  min="1994"
                  max="2023"
                  step="1"
                  name="year"
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="my-3">
              <Form.Label column sm={3}>
                Payment:
              </Form.Label>
              <Col sm={9}>
                <Form.Select
                  type="select"
                  name="mop"
                  onChange={this.handleChange}
                  value={this.state.mop}
                >
                  <option value=""></option>
                  <option value="Gcash">Gcash</option>
                  <option value="Bank">Bank</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="my-3">
              <Form.Label column sm={3}>
                Reference #:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="referencenum"
                  onChange={this.handleChange}
                  onPaste={this.handlePaste}
                  value={this.state.referencenum}
                  autoComplete="off"
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
                  onPaste={this.handlePaste}
                  onChange={this.handleChange}
                  value={this.state.email}
                  autoComplete="off"
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
              type="submit"
              size="md"
              disabled={this.state.empty}
            >
              Submit
            </Button>
          </Row>
        </Form>
      </Container>
    );
  }
}
export default RegisterPage;
