import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">🎬 Cinéma Kids</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#">Accueil</Nav.Link>
                    <Nav.Link href="#">À Propos</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
