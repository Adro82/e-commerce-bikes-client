import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navigation = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-5">
            <Container>
                <Navbar.Brand href="home">Bikes App</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Link to="/">
                            <Nav.Link as="span">Home</Nav.Link>
                        </Link>
                        <Link to="/gallery">
                            <Nav.Link as="span">Bikes</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Navigation
