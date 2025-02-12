import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Header = ({ onShowForm }) => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">🎬 Cinéma Kids</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#">Accueil</Nav.Link>
                    <Nav.Link href="#">À Propos</Nav.Link>
                    <Button variant="warning" onClick={onShowForm}>➕ Ajouter un film</Button>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
