import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const MovieForm = ({ show, handleClose, addMovie }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterURL, setPosterURL] = useState("");
    const [note, setNote] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = {
            title,
            description,
            posterURL: posterURL || "https://via.placeholder.com/150", // Image par défaut
            note: parseFloat(note) || 0,
        };
        addMovie(newMovie);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Ajouter un film</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Titre</Form.Label>
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>URL de l'affiche</Form.Label>
                        <Form.Control
                            type="text"
                            value={posterURL}
                            onChange={(e) => setPosterURL(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Note</Form.Label>
                        <Form.Control
                            type="number"
                            step="0.1"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Ajouter
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default MovieForm;
