import { Container, Navbar, Nav, Row } from 'react-bootstrap';
import saramok from '../assets/saramok.png';
import { Link } from 'react-router-dom';
export const NavigationBar = () => {
  return (
    <Navbar className="navBar">
      <Container>
        <Navbar.Brand as={Link} to="/Handumanan">
          <img
            src={saramok}
            alt=""
            style={{
              minWidth: '120px',
            }}
          />
        </Navbar.Brand>

        <Nav className="responsiveNav">
          <Nav.Link as={Link} to="/Handumanan/register" className="navLink">
            Register
          </Nav.Link>
          <Nav.Link as={Link} to="/Handumanan/payment" className="navLink">
            Payment
          </Nav.Link>
          <Nav.Link as={Link} to="/Handumanan/scan" className="navLink">
            Scan
          </Nav.Link>{' '}
          <Nav.Link as={Link} to="/Handumanan/admin" className="navLink">
            Admin
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
