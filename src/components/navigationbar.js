import { Container, Navbar, Nav, Row } from 'react-bootstrap';
import cocktail from '../assets/cocktail.svg';
import { Link } from 'react-router-dom';
export const NavigationBar = () => {
  return (
    <Navbar className="navBar">
      <Container>
        <Navbar.Brand as={Link} to="/Handumanan">
          <span className="logo">
            Saramok
            <img
              src={cocktail}
              alt=""
              style={{
                maxWidth: '30px',
                maxHeight: '30px',
              }}
            />
          </span>
        </Navbar.Brand>

        <Nav>
          <Nav.Link as={Link} to="/Handumanan/register" className="navLink">
            Register
          </Nav.Link>
          <Nav.Link as={Link} to="/Handumanan/payment" className="navLink">
            Payment
          </Nav.Link>
          <Nav.Link as={Link} to="/Handumanan/scan" className="navLink">
            Scan
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
