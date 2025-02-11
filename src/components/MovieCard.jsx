import React from "react";
import { Card } from "react-bootstrap";


const MovieCard = ({ title, description, posterURL, note }) => {
    return (
        <Card className="shadow-lg rounded m-2">
            <Card.Img variant="top" src={posterURL} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <p className="fw-bold">⭐ {note}/10</p>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;
