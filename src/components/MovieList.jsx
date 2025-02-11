import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
    return (
        <Container className="mt-4">
            <Row>
                {movies.map((movie, index) => (
                    <Col key={index} md={4} className="d-flex justify-content-center">
                        <MovieCard {...movie} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default MovieList;
