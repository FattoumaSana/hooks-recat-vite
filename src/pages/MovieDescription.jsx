import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const MovieDescription = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { title, description, posterURL, note, trailerLink } = location.state || {}; // Récupération des données du film

    return (
        <Container className="mt-5">
            <Row>
                <Col md={4}>
                    <Card.Img variant="top" src={posterURL} alt={title} />
                </Col>
                <Col md={8}>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <p className="fw-bold">⭐ {note}/10</p>
                        {/* Intégration de l'iframe ici */}
                        <Button variant="secondary" onClick={() => navigate("/")}>Retour à l'accueil</Button>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    );
};

export default MovieDescription;