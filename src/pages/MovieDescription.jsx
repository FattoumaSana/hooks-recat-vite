import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../assets/styles/MovieDescription.css";

const MovieDescription = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { title, description, posterURL, note, trailerLink } = location.state || {};

    const extractVideoId = (link) => {
        if (!link) return null;

        let videoId = null;

        if (link.includes("watch?v=")) {
            const urlParams = new URLSearchParams(link.split("?")[1]);
            videoId = urlParams.get("v");
        } else if (link.includes("embed/")) {
            videoId = link.split("embed/")[1];
        }

        return videoId;
    };

    const renderTrailer = () => {
        if (trailerLink) {
            const videoId = extractVideoId(trailerLink);
            if (videoId) {
                const iframeSrc = `https://www.youtube.com/embed/${videoId}`;
                return (
                    <div className="ratio ratio-16x9 mb-4">
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
                return <p className="text-danger">Lien YouTube invalide.</p>;
            }
        }
        return null;
    };

    if (!location.state) {
        return <p className="text-center mt-5">Détails du film non trouvés.</p>;
    }

    return (
        <Container className="mt-5 movie-description-container">
            <Row className="justify-content-center">
                <Col md={8} lg={12}>
                    <Card className="shadow-lg">
                        <Row className="g-0">
                            <Col md={5}>
                                <Card.Img variant="top" src={posterURL} alt={title} className="img-fluid rounded-start" />
                            </Col>
                            <Col md={7}>
                                <Card.Body className="p-4">
                                    {/* Titre du film */}
                                    <Card.Title className="movie-title">{title}</Card.Title>

                                    {/* Description du film */}
                                    <Card.Text className="movie-description">{description}</Card.Text>

                                    {/* Note du film */}
                                    <div className="movie-rating">
                                        <span className="movie-rating-text">⭐ {note}/10</span>
                                        <div className="movie-rating-bar">
                                            <div
                                                className="movie-rating-progress"
                                                style={{ width: `${(note / 10) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Bande-annonce */}
                                    {renderTrailer()}

                                    {/* Bouton Retour à l'accueil */}
                                    <button
                                        className="movie-back-button"
                                        onClick={() => navigate("/")}
                                    >
                                        Retour à l'accueil
                                    </button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default MovieDescription;