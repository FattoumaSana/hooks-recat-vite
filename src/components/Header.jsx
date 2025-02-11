import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-6 text-center shadow-lg">
            <h1 className="text-4xl font-extrabold">🎬 Cinéma Kids 🎨</h1>
            <nav className="mt-4">
                <Link to="/" className="mx-4 text-lg hover:underline">Accueil</Link>
                <Link to="/about" className="mx-4 text-lg hover:underline">À Propos</Link>
            </nav>
        </header>
    );
};

export default Header;
