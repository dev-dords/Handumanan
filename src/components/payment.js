import { Container, Row } from 'react-bootstrap';
import payment from '../assets/payment.png';
export const Payment = () => {
  return (
    <Container
      fluid="sm"
      className="main-container justify-content-center text-align-center"
      style={{ maxWidth: '1000px' }}
    >
      <Row>
        <h3 className="text-center text-sm-start notes-text">
          Modes of Payment
        </h3>
      </Row>{' '}
      <Row className="row shadow-lg p-5 rounded justify-content-center form-container">
        <img src={payment} alt="" />
      </Row>
    </Container>
  );
};
