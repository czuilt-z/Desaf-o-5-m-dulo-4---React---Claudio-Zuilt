import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigation() {
    const total = 25000;
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Mamma Mia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link as={Link} to="/">🍕 Home</Nav.Link>
                      <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                      <Nav.Link as={Link} to="/login">🔐 Login</Nav.Link>
                      <Nav.Link as={Link} to="/register">Register</Nav.Link>
                      <Nav.Link as={Link} to="/cart">🛒 Total: ${total.toLocaleString('es-CL')}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;