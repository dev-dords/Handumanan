import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
export const NavigationBar = () => {
  return (
    <Navbar bg="light" className="border">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} width="90" height="90" alt="" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
          <Nav.Link as={Link} to="/scan">Scan</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
