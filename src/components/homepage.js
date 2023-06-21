import { Col, Container, Row } from 'react-bootstrap';
import cocktail from '../assets/cocktail.svg';
const Homepage = () => {
  return (
    <Container
      fluid="sm"
      className="main-container justify-content-center text-align-center"
      style={{ maxWidth: '1100px' }}
    >
      <Row className="row shadow-lg p-5 rounded justify-content-center form-container">
        <Col sm={12} md={6}>
          <Row className="shadow rounded price-container">
            <h2
              className="text-center mt-3 price-header"
              style={{ backgroundColor: 'rgb(28,215,89)' }}
            >
              Ticket Prices
            </h2>
            <span className="mt-1 ms-2 price-text">
              Php350 – Regular Price (before July 8 - 8pm only)
            </span>
            <span className="mt-1  ms-2 price-text">Php400 – Door Price</span>
            <span className="mt-1  ms-2 price-text">
              Php990 – Bundle of 3 (before July 8 - 8pm only)
            </span>
            <span className="mt-1  ms-2 price-text">
              Php1300 – Bundle of 4 (before July 8 - 8pm only)
            </span>
            <span className="mt-1  ms-2 price-text">
              Php1600 – Bundle of 5 (before July 8 - 8pm only)
            </span>
           <span className="mt-4 price-text2">
              * Tickets are inclusive of Snacks, free-flowing Drinks and a
              Raffle Entry.
            </span>
            <span className="mt-1 price-text2">
              * Exclusive to PSHS-EVC Alumni only but a plus-one (non-PSHS-EVC
              alumnus) is allowed.
            </span>
          </Row>
        </Col>
        <Col md={6} className="text-center d-none d-md-block">
          <img src={cocktail} alt="" style={{ maxWidth: '400px' }} />
        </Col>
      </Row>
    </Container>
  );
};
export default Homepage;
