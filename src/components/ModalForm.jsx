import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalForm = ({ show, handleClose, addMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier que tous les champs sont remplis
    if (!title || !description || !imageUrl || !rating) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    // Créer un objet film
    const newMovie = {
      title,
      description,
      imageUrl,
      rating: parseFloat(rating),
    };

    // Envoyer les données au parent (App.jsx ou Home.jsx)
    addMovie(newMovie);

    // Réinitialiser les champs
    setTitle("");
    setDescription("");
    setImageUrl("");
    setRating("");

    // Fermer la modale
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>➕ Ajouter un Film</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Titre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le titre du film"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Entrez la description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>URL de l'Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez l'URL de l'affiche"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Note (1 à 10)</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="10"
              placeholder="Note du film"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
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

export default ModalForm;
