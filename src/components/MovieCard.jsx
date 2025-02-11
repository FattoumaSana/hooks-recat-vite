import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = ({ title, description, image, rating }) => {
    return (
        <Card className="shadow-lg rounded m-2">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <p className="fw-bold">⭐ {rating}/10</p>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;
