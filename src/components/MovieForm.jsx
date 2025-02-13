import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function ModalForm({ show, onClose }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [rating, setRating] = useState("");

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Ajouter un film</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Titre</Form.Label>
                        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>URL de l'image</Form.Label>
                        <Form.Control type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Note</Form.Label>
                        <Form.Control type="number" min="1" max="10" value={rating} onChange={(e) => setRating(e.target.value)} />
                    </Form.Group>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={onClose}>Fermer</Button>
                        <Button type="submit" variant="primary">Ajouter</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalForm;
