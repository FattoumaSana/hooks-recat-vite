import React, { useState } from "react";
import MovieList from "../components/MovieList";
import Filter from "../components/Filter";

const Home = () => {
    const [movies, setMovies] = useState([
        {
            title: "Le Roi Lion",
            description: "Les aventures de Simba, le lionceau destiné à devenir roi.",
            posterURL: "https://upload.wikimedia.org/wikipedia/en/7/76/The_Lion_King_2019_poster.jpg",
            note: 9.0,
        },
        {
            title: "Toy Story",
            description: "Les jouets prennent vie dans une aventure magique.",
            posterURL: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
            note: 8.5,
        },
        {
            title: "La Reine des Neiges",
            description: "L'histoire magique d'Elsa et Anna dans le royaume d'Arendelle.",
            posterURL: "https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg",
            note: 8.0,
        },
        {
            title: "Moi, Moche et Méchant",
            description: "Gru et ses Minions dans une aventure hilarante.",
            posterURL: "https://upload.wikimedia.org/wikipedia/en/d/db/Despicable_Me_Poster.jpg",
            note: 8.1,
        },
        {
            title: "Coco",
            description: "Un voyage coloré dans le monde des morts avec Miguel.",
            posterURL: "https://upload.wikimedia.org/wikipedia/en/2/27/Coco_%282017_film%29_poster.jpg",
            note: 8.7,
        },
        {
            title: "Les Indestructibles",
            description: "Une famille de super-héros affronte le danger ensemble.",
            posterURL: "https://upload.wikimedia.org/wikipedia/en/e/ec/The_Incredibles_%282004_film%29_poster.jpg",
            note: 8.6,
        },
        {
            title: "Vaiana",
            description: "Une jeune navigatrice part en quête pour sauver son île.",
            posterURL: "https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg",
            note: 8.1,
        },
        {
            title: "Ratatouille",
            description: "Un rat passionné de cuisine devient chef à Paris.",
            posterURL: "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg",
            note: 8.4,
        },
        {
            title: "Shrek",
            description: "Un ogre attachant part à l'aventure pour sauver une princesse.",
            posterURL: "https://upload.wikimedia.org/wikipedia/en/3/39/Shrek.jpg",
            note: 8.1,
        }
    ]);

    const [filterTitle, setFilterTitle] = useState("");
    const [filterRating, setFilterRating] = useState("");

    const filteredMovies = movies.filter(
        (movie) =>
            movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
            (filterRating === "" || movie.note >= parseFloat(filterRating))
    );

    return (
        <div className="p-8 bg-gradient-to-b from-blue-300 to-purple-400 min-h-screen text-white">
            <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
            <MovieList movies={filteredMovies} />
        </div>
    );
};

export default Home;
