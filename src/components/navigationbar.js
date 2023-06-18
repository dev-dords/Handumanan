import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.jpg';
export const NavigationBar = () => {
  return (
    <Navbar bg="light" className="border">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} width="90" height="90" alt="" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#register">Register</Nav.Link>
          <Nav.Link href="#scan">Scan</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
