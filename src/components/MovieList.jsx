import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {movies.length > 0 ? (
                movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
            ) : (
                <p className="col-span-3 text-center text-gray-400">Aucun film trouvé</p>
            )}
        </div>
    );
};

export default MovieList;
