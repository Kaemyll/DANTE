import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

export default function NavbarCustom() {
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Accueil</Nav.Link>
                        <Nav.Link href="/about">A propos de moi</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Recettes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Jeux de rôles</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">SIG</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Dashboard</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}