import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Container, Row, Col, Form, Button, Modal, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/Home.css";
import Filter from "../components/Filter"; // Import Filter


// Function to slugify the title
function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-"); // Replace spaces with hyphens
}


const Home = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const [movies, setMovies] = useState([
        {
            title: "Le Roi Lion",
            description: "Dans les vastes savanes d'Afrique, un jeune lionceau nommé Simba, héritier du trône, voit sa vie basculer lorsque son oncle Scar, avide de pouvoir, assassine son père, le roi Mufasa. Simba, rongé par la culpabilité et chassé de sa terre natale, erre dans le désert où il se lie d'amitié avec Timon et Pumbaa, un duo attachant et excentrique. Ensemble, ils adoptent une philosophie de vie insouciante, 'Hakuna Matata', pour oublier les épreuves du passé. Cependant, le destin rappelle Simba à son devoir. Confronté à la tyrannie de Scar et à la souffrance de son peuple, il doit faire face à son passé, accepter son héritage et reprendre sa place légitime sur le trône. Guidé par les sages conseils de Rafiki, un babouin mystique, et encouragé par l'amour de son amie d'enfance Nala, Simba trouve la force de surmonter ses peurs et d'affronter Scar dans un combat épique pour la justice et la rédemption. Le Roi Lion est un conte intemporel sur le courage, la responsabilité et la quête de soi, sublimé par des images époustouflantes et une musique inoubliable.",
            posterURL: "https://th.bing.com/th/id/R.43da05662d81ca4af3c2f24c6b333d81?rik=EWqqno%2fTqjhHqg&pid=ImgRaw&r=0",
            note: 9.0,
            trailerLink: "https://www.youtube.com/watch?v=4CbL0XkpdzE"
        },
        {
            title: "Toy Story",
            description: "Dans la chambre d'Andy, un jeune garçon passionné par les jouets, un monde merveilleux et secret s'anime dès qu'il a le dos tourné. Woody, un cow-boy enjoué et la figurine préférée d'Andy, règne en maître sur ce royaume miniature. Son statut est toutefois menacé par l'arrivée de Buzz l'Éclair, un astronaute moderne et sophistiqué, persuadé d'être un véritable ranger de l'espace. La jalousie et la rivalité entre les deux jouets laissent place à une aventure extraordinaire lorsque, accidentellement égarés loin de leur foyer, ils doivent unir leurs forces pour rentrer à la maison. Poursuivis par Sid, un garçon sadique qui adore torturer les jouets, Woody et Buzz devront surmonter leurs différences et apprendre à se faire confiance pour retrouver Andy et leurs amis. Toy Story est une comédie d'animation révolutionnaire qui aborde avec humour et émotion les thèmes de l'amitié, de l'acceptation et du passage à l'âge adulte, tout en offrant une réflexion profonde sur la nature des jouets et leur importance dans l'enfance.",
            posterURL: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
            note: 8.5,
            trailerLink: "https://www.youtube.com/watch?v=vwy-sCzGuvo"
        },
        {
            title: "La Reine des Neiges",
            description: "Dans le royaume enchanteur d'Arendelle, deux sœurs, Elsa et Anna, partagent un lien indéfectible. Elsa, l'aînée, possède un pouvoir magique extraordinaire : elle peut contrôler la neige et la glace. Cependant, ce don, qu'elle peine à maîtriser, la pousse à s'isoler du monde extérieur, y compris de sa propre sœur. Après un incident malheureux, Elsa s'enfuit et plonge le royaume dans un hiver éternel. Anna, déterminée à sauver sa sœur et son royaume, se lance dans une quête périlleuse à travers des paysages enneigés et des montagnes glacées. Elle est accompagnée de Kristoff, un montagnard courageux, de Sven, son fidèle renne, et d'Olaf, un bonhomme de neige attachant et naïf. Ensemble, ils affronteront des tempêtes de neige, des trolls et d'autres dangers pour retrouver Elsa et briser le sort qui pèse sur Arendelle. La Reine des Neiges est un conte moderne sur l'amour fraternel, l'acceptation de soi et le pouvoir de la résilience, porté par des chansons entraînantes et des personnages inoubliables.",
            posterURL: "https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg",
            note: 8.0,
            trailerLink: "https://www.youtube.com/watch?v=TbQm5zlWS0Y"
        },
        {
            title: "Moi, Moche et Méchant",
            description: "Gru, un super-vilain excentrique et maladroit, aspire à devenir le plus grand criminel de tous les temps. Son plan machiavélique : voler la Lune ! Pour mener à bien son projet, il adopte trois orphelines, Margo, Edith et Agnès, dans le seul but de les utiliser pour infiltrer la forteresse de son rival, Vector. Cependant, les choses ne se passent pas comme prévu. Gru, qui se croyait insensible et cynique, se retrouve peu à peu attendri par l'amour et l'innocence des trois fillettes. Il découvre alors des sentiments qu'il n'avait jamais connus, tels que l'affection et la tendresse. Alors que son plan avance, Gru se retrouve confronté à un dilemme : doit-il choisir entre son ambition criminelle et son amour naissant pour ses filles adoptives ? Moi, Moche et Méchant est une comédie d'animation hilarante et touchante qui explore les thèmes de la famille, de l'amour et de la rédemption, tout en offrant un regard amusant sur le monde des super-vilains.",
            posterURL: "https://th.bing.com/th/id/OIP.-6IWDwKJ21jPQSCgaknNFAHaLH?w=1400&h=2100&rs=1&pid=ImgDetMain",
            note: 8.1,
            trailerLink: "https://www.youtube.com/watch?v=D19j_p8t9_Y"
        },
        {
            title: "Coco",
            description: "Dans le village mexicain de Santa Cecilia, Miguel, un jeune garçon passionné de musique, rêve de devenir un musicien célèbre comme son idole, Ernesto de la Cruz. Cependant, sa famille, et en particulier sa grand-mère, Abuelita, a banni la musique depuis des générations, la considérant comme une malédiction. Déterminé à poursuivre son rêve, Miguel se lance dans une aventure extraordinaire lors de la fête des Morts. Il se retrouve transporté dans le monde coloré et vibrant des ancêtres, où il rencontre Héctor, un squelette attachant et malicieux. Ensemble, ils partent à la recherche d'Ernesto de la Cruz, le grand-père de Miguel, pour obtenir sa bénédiction et pouvoir revenir dans le monde des vivants. Coco est un voyage émouvant et musical qui explore les thèmes de la famille, de la mémoire et de la poursuite de ses rêves, tout en célébrant la richesse de la culture mexicaine.",
            posterURL: "https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810",
            note: 8.7,
            trailerLink: "https://www.youtube.com/watch?v=Ga6RYeIwE9w"
        },
        {
            title: "Les Indestructibles",
            description: "Dans un monde où les super-héros sont contraints de vivre cachés, Bob Parr, alias M. Indestructible, aspire à retrouver sa gloire passée. Marié à Hélène, alias Elastigirl, et père de trois enfants dotés de super-pouvoirs, il mène une vie banale et monotone. Un jour, une mystérieuse organisation lui propose une mission secrète pour sauver le monde. Bob y voit l'occasion de renouer avec son passé de héros et accepte sans hésiter. Cependant, il ignore que cette mission va le plonger dans une conspiration complexe et dangereuse, qui mettra en péril sa famille et le monde entier. Les Indestructibles est une comédie d'action palpitante qui explore les thèmes de la famille, de l'identité et de l'équilibre entre la vie personnelle et les responsabilités héroïques, tout en offrant une satire amusante du monde des super.",
            posterURL: "https://th.bing.com/th/id/OIP.mlzvCgIIoKHArLDAgcrw_QHaLH?rs=1&pid=ImgDetMain",
            note: 8.6,
            trailerLink: "https://www.youtube.com/watch?v=VzY_z_9pC_c"
        },
        {
            title: "Vaiana",
            description: "Sur l'île polynésienne de Motunui, Vaiana, une jeune fille intrépide et passionnée par la mer, est destinée à succéder à son père en tant que chef de son peuple. Cependant, un fléau mystérieux menace l'île, asséchant la végétation et vidant les eaux de leurs poissons. Vaiana, convaincue que la solution réside au-delà de la barrière de corail, défie les traditions de son peuple et se lance dans une quête audacieuse à travers l'océan Pacifique. Sa mission : retrouver Maui, un demi-dieu légendaire, et lui rendre son hameçon magique, volé au cœur de Te Fiti, la déesse de la vie. Ensemble, ils affronteront des créatures marines redoutables, des tempêtes déchaînées et les pièges tendus par le royaume des monstres. Vaiana est un conte initiatique vibrant et coloré qui célèbre le courage, la détermination et le lien profond entre l'homme et la nature, tout en mettant en lumière la richesse de la culture polynésienne.",
            posterURL: "https://m.media-amazon.com/images/I/81dhMgYBsgL._AC_SY879_.jpg",
            note: 8.1,
            trailerLink: "https://www.youtube.com/watch?v=Fw-m2xV_o5s"
        },
        {
            title: "Ratatouille",
            description: "Rémy, un rat parisien doté d'un odorat exceptionnel et d'une passion dévorante pour la gastronomie, rêve de devenir un grand chef. Malheureusement, son origine et son apparence le condamnent à la clandestinité. Un jour, le hasard le conduit dans les cuisines du prestigieux restaurant Gusteau, où il rencontre Linguini, un commis maladroit et inexpérimenté. Ensemble, ils vont former une équipe improbable et surmonter les obstacles qui se dressent sur leur chemin. Rémy, caché sous le chapeau de Linguini, guide ses mouvements et crée des plats savoureux qui éblouissent les clients et les critiques. Cependant, leur succès attire l'attention de Skinner, le chef jaloux et avide de pouvoir, qui fera tout pour démasquer le secret de Linguini. Ratatouille est une comédie culinaire savoureuse et inventive qui célèbre la créativité, la persévérance et l'importance de suivre ses rêves, même les plus fous.",
            posterURL: "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg",
            note: 8.4,
            trailerLink: "https://www.youtube.com/watch?v=c9X4qE05efE"
        },
        {
            title: "Shrek",
            description: "Dans le royaume de Fort Fort Lointain, Shrek, un ogre solitaire et bourru, vit paisiblement dans son marais. Sa tranquillité est perturbée par l'arrivée de créatures de contes de fées, chassées de leur royaume par le perfide Lord Farquaad. Pour les renvoyer chez eux, Shrek accepte de sauver la princesse Fiona, enfermée dans une tour gardée par un dragon. Accompagné de son fidèle compagnon, l'âne bavard et exubérant, Shrek se lance dans une aventure rocambolesque. Au fil de leur périple, Shrek et Fiona découvrent qu'ils ont plus en commun qu'ils ne le pensaient. Shrek, qui se croyait laid et repoussant, découvre qu'il a un cœur tendre et généreux. Fiona, qui rêvait d'un prince charmant, réalise que le véritable amour ne se soucie pas des apparences. Shrek est une parodie hilarante et subversive des contes de fées traditionnels, qui célèbre la différence, l'acceptation de soi et l'importance de l'amitié.",
            posterURL: "https://all.web.img.acsta.net/r_250_x/medias/nmedia/00/00/00/66/69199338_af.jpg",
            note: 8.1,
            trailerLink: "https://www.youtube.com/watch?v=pW9k9fqwz7w"
        }
    ]);

    const [filterTitle, setFilterTitle] = useState("");
    const [filterRating, setFilterRating] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [newMovie, setNewMovie] = useState({ title: "", description: "", posterURL: "", note: "" });

    const filteredMovies = movies.filter(
        (movie) =>
            movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
            (filterRating === "" || movie.note >= parseFloat(filterRating))
    );

    const handleAddMovie = () => {
        if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.note) {
            setMovies([...movies, { ...newMovie, note: parseFloat(newMovie.note) }]);
            setNewMovie({ title: "", description: "", posterURL: "", note: "" });
            setShowModal(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Container className="py-4">
                {/* Filtres et Bouton Ajouter un film */}
                <Row className="mb-4 align-items-center">
                    <Col md={8}>
                        <Filter setFilterTitle={setFilterTitle} /> {/* Use the Filter component */}
                    </Col>
                    <Col md={3}>
                        <Form.Select
                            className="custom-select"
                            value={filterRating}
                            onChange={(e) => setFilterRating(e.target.value)}
                        >
                            <option value="">Toutes les notes</option>
                            <option value="9">9+ ⭐</option>
                            <option value="8.5">8.5+ ⭐</option>
                            <option value="8">8+ ⭐</option>
                            <option value="7.5">7.5+ ⭐</option>
                        </Form.Select>
                    </Col>
                    <Col md={1} className="text-end">
                        <Button variant="warning" onClick={() => setShowModal(true)}>
                            ➕
                        </Button>
                    </Col>
                </Row>
                {/* Modale d'ajout de film */}
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ajouter un film</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-2">
                                <Form.Control type="text" placeholder="Titre du film" value={newMovie.title} onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })} />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Control type="text" placeholder="Description" value={newMovie.description} onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })} />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Control type="text" placeholder="URL de l'affiche" value={newMovie.posterURL} onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })} />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Control type="number" placeholder="Note (ex: 8.5)" value={newMovie.note} onChange={(e) => setNewMovie({ ...newMovie, note: e.target.value })} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>Annuler</Button>
                        <Button variant="success" onClick={handleAddMovie}>Ajouter</Button>
                    </Modal.Footer>
                </Modal>

                {/* Liste des films */}
                <Row>
                    {filteredMovies.map((movie, index) => (
                        <Col key={index} md={4} className="mb-4 d-flex justify-content-center">
                            <Card className="shadow-lg rounded m-2 movie-card">
                                <Card.Img
                                    variant="top"
                                    src={movie.posterURL}
                                    alt={movie.title}
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                        navigate(`/movie/${slugify(movie.title)}`, { state: movie })
                                    }
                                />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>
                                        {movie.description.length > 100 ? movie.description.substring(0, 100) + "..." : movie.description}
                                    </Card.Text>
                                    <p className="fw-bold">⭐ {movie.note}/10</p>
                                    <Button
                                        variant="primary"
                                        onClick={() =>
                                            navigate(`/movie/${slugify(movie.title)}`, { state: movie })
                                        }
                                    >
                                        Voir plus
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </motion.div>
    );
};

export default Home;