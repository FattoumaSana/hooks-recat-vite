import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ModalForm from "./components/ModalForm";

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const [movies, setMovies] = useState([]);

  // Fonction pour ajouter un film
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    console.log(movies)
  };

  return (
    <Router>
      <Header onShowForm={() => setModalShow(true)} />
      <Routes>
        <Route path="/" element={<Home movies={movies}  />} />
        <Route path="/about" element={<div className="text-white p-8">Page À Propos</div>} />
      </Routes>

      {/* La modale */}
      <ModalForm show={modalShow} handleClose={() => setModalShow(false)} addMovie={addMovie} />
    </Router>
  );
};

export default App;
