import React, { useState } from "react";
import MovieList from "../components/MovieList";
import Filter from "../components/Filter";


const Home = () => {
    const [movies, setMovies] = useState([
        {
            title: "Le Roi Lion",
            description: "Les aventures de Simba, le lionceau destiné à devenir roi.",
            posterURL: "https://via.placeholder.com/150",
            note: 9.0,
        },
        {
            title: "Toy Story",
            description: "Les jouets prennent vie dans une aventure magique.",
            posterURL: "https://via.placeholder.com/150",
            note: 8.5,
        },
    ]);

    const [filterTitle, setFilterTitle] = useState("");
    const [filterRating, setFilterRating] = useState("");

    const filteredMovies = movies.filter(
        (movie) =>
            movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
            (filterRating === "" || movie.note >= parseFloat(filterRating))
    );

    return (
        <div className="p-8 bg-gray-900 min-h-screen text-white">
            <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
            <MovieList movies={filteredMovies} />
        </div>
    );
};

export default Home;
