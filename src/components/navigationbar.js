import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
export const NavigationBar = () => {
  return (
    <Navbar className="navBar">
      <Container>
        <Navbar.Brand as={Link} to="/Handumanan">
          {/* <img src={logo} width="90" height="90" alt="" /> */}
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/Handumanan/register" className="navLink">
            Register
          </Nav.Link>
          <Nav.Link as={Link} to="/Handumanan/scan" className="navLink">
            Scan
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
