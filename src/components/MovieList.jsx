import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

const movies = [
  {
    title: "Le Roi Lion",
    description: "Les aventures de Simba...",
    image: "https://link-to-image.jpg",
    rating: 9,
  },
  {
    title: "Toy Story",
    description: "Les jouets prennent vie...",
    image: "https://link-to-image.jpg",
    rating: 8.5,
  },
];

const MovieList = () => {
  return (
    <Container className="mt-4">
      <Row>
        {movies.map((movie, index) => (
          <Col key={index} md={4}>
            <MovieCard {...movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieList;
