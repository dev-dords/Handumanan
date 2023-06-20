import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
export const NavigationBar = () => {
  return (
    <Navbar bg="light" className="border">
      <Container>
        <Navbar.Brand as={Link} to="/Handumanan">
          <img src={logo} width="90" height="90" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Handumanan/register">
              Register
            </Nav.Link>
            <Nav.Link as={Link} to="/Handumanan/scan">
              Scan
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
