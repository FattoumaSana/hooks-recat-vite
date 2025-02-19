import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const MovieDescription = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { title, description, posterURL, note, trailerLink } = location.state || {};

    const extractVideoId = (link) => {
        if (!link) return null;

        // Expression régulière pour YouTube (gère différents formats)
        const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/?\/)?(?:v\/)?)?([^#\&\?\/ ]{11})/;
        const youtubeMatch = link.match(youtubeRegex);
        if (youtubeMatch) return youtubeMatch[1];

        return null; // Retourne null si ce n'est pas un lien YouTube
    };

    const renderTrailer = () => {
        if (trailerLink) {
            const videoId = extractVideoId(trailerLink);
            if (videoId) {
                const iframeSrc = `https://www.youtube.com/embed/${videoId}`; // URL YouTube correcte

                return (
                    <div className="ratio ratio-16x9"> {/* Utilisation de ratio pour un iframe réactif */}
                        <iframe
                            src={iframeSrc}
                            title="Bande-annonce"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                );
            } else {
                return <p>Lien YouTube invalide.</p>;
            }
        }
        return null;
    };

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
                        {renderTrailer()} {/* Affichage de la bande-annonce ici */}
                        <Button variant="secondary" onClick={() => navigate("/")}>
                            Retour à l'accueil
                        </Button>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    );
};

export default MovieDescription;