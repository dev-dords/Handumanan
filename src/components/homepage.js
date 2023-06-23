import { Col, Container, Row } from 'react-bootstrap';

const Homepage = () => {
  return (
    <Container
      fluid="sm"
      className="main-container form-container shadow-lg justify-content-center text-center rounded  p-5"
      style={{ maxWidth: '1000px' }}
    >
      <Row>
        <span className="bundle-title">BARKADA PACKAGE</span>
      </Row>
      <Row>
        <Col>
          <div className="bundle-container">
            <span className="bundle-text">Bundle of 3</span>
            <div className="bundle-price">P990.00</div>
          </div>
        </Col>
        <Col>
          <div className="bundle-container">
            <span className="bundle-text">Bundle of 4</span>
            <div className="bundle-price">P1300.00</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="bundle-container">
            <span className="bundle-text">Bundle of 5</span>
            <div className="bundle-price">P1600.00</div>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-end">
          <span className="single-text">Presale </span>
          <span className="single-price">P350</span>
        </Col>
        <Col className="text-start">
          <span className="single-text">Walk-in </span>
          <span className="single-price">P400</span>
        </Col>
      </Row>
      <Row className="bundle-notes">
        <span className='notes-text'>
          Inclusive of snacks, free-flowing drinks, and a raffle entry
        </span>
      </Row>
    </Container>
  );
};
export default Homepage;
