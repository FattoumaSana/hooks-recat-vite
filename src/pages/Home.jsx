import React, { useState } from "react";
import MovieList from "../components/MovieList";
import Filter from "../components/Filter";
import Header from "../components/Header";
import { Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [movies, setMovies] = useState([
    {
      title: "Le Roi Lion",
      description: "Les aventures de Simba, le lionceau destiné à devenir roi.",
      posterURL: "https://th.bing.com/th/id/R.43da05662d81ca4af3c2f24c6b333d81?rik=EWqqno%2fTqjhHqg&pid=ImgRaw&r=0",
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
      posterURL: "https://th.bing.com/th/id/OIP.-6IWDwKJ21jPQSCgaknNFAHaLH?w=1400&h=2100&rs=1&pid=ImgDetMain",
      note: 8.1,
    },
    {
      title: "Coco",
      description: "Un voyage coloré dans le monde des morts avec Miguel.",
      posterURL: "https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810",
      note: 8.7,
    },
    {
      title: "Les Indestructibles",
      description: "Une famille de super-héros affronte le danger ensemble.",
      posterURL: "https://th.bing.com/th/id/OIP.mlzvCgIIoKHArLDAgcrw_QHaLH?rs=1&pid=ImgDetMain",
      note: 8.6,
    },
    {
      title: "Vaiana",
      description: "Une jeune navigatrice part en quête pour sauver son île.",
      posterURL: "https://m.media-amazon.com/images/I/81dhMgYBsgL._AC_SY879_.jpg",
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
      posterURL: "https://all.web.img.acsta.net/r_250_x/medias/nmedia/00/00/00/66/69199338_af.jpg",
      note: 8.1,
    }
  ]);
  import React, { useState } from "react";
  import MovieList from "../components/MovieList";
  import { Container } from "react-bootstrap";
  import "bootstrap/dist/css/bootstrap.min.css";
  
  const Home = ({ filterTitle, filterRating }) => {
    const [movies, setMovies] = useState([
      {
        title: "Le Roi Lion",
        description: "Les aventures de Simba, le lionceau destiné à devenir roi.",
        posterURL: "https://th.bing.com/th/id/R.43da05662d81ca4af3c2f24c6b333d81?rik=EWqqno%2fTqjhHqg&pid=ImgRaw&r=0",
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
        posterURL: "https://th.bing.com/th/id/OIP.-6IWDwKJ21jPQSCgaknNFAHaLH?w=1400&h=2100&rs=1&pid=ImgDetMain",
        note: 8.1,
      },
      {
        title: "Coco",
        description: "Un voyage coloré dans le monde des morts avec Miguel.",
        posterURL: "https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810",
        note: 8.7,
      },
      {
        title: "Les Indestructibles",
        description: "Une famille de super-héros affronte le danger ensemble.",
        posterURL: "https://th.bing.com/th/id/OIP.mlzvCgIIoKHArLDAgcrw_QHaLH?rs=1&pid=ImgDetMain",
        note: 8.6,
      },
      {
        title: "Vaiana",
        description: "Une jeune navigatrice part en quête pour sauver son île.",
        posterURL: "https://m.media-amazon.com/images/I/81dhMgYBsgL._AC_SY879_.jpg",
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
        posterURL: "https://all.web.img.acsta.net/r_250_x/medias/nmedia/00/00/00/66/69199338_af.jpg",
        note: 8.1,
      }
    ]);
  
    // Filtrage des films selon les props
    const filteredMovies = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        (filterRating === "" || movie.note >= parseFloat(filterRating))
    );
  
    return (
      <Container className="py-4">
        {/* Liste des films */}
        <MovieList movies={filteredMovies} />
      </Container>
    );
  };
  
  export default Home;
  