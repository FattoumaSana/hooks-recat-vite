import React from "react";
import { Form } from "react-bootstrap";

const Filter = ({ setFilterTitle }) => {
  return (
    <Form.Control
      type="text"
      placeholder="Rechercher un film..."
      onChange={(e) => setFilterTitle(e.target.value)}
    />
  );
};

export default Filter;
