import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header id="Header">
            <div id="Texto">
                <Link to='/'> 
                    <span className="Span"><p>Home</p></span>
                </Link>
                <Link to='/fornecedor'>
                    <span className="Span"><p>Fornecedores</p></span>
                </Link>
                <Link to='/cerimonialista'>
                    <span className="Span"><p>Cerimônialista</p></span>
                </Link>
                <Link to='/galeria'>
                    <span className="Span"><p>Galeria</p></span>
                </Link>
                <Link to='/sobre'>
                    <span className="Span"><p>Sobre</p></span>
                </Link>
            </div>

            <div id="Svg">
                <Link to="/cadastro">
                    <FontAwesomeIcon id="log" icon={faRightFromBracket} style={{ color: "#f2dcd8" }} />
                </Link>
            </div>

            {/* Menu Hamburger */}
            <div 
                className="hamburger" 
                onClick={toggleMenu} 
                aria-label="Toggle menu" // Acessibilidade
                role="button" // Indica que é um botão
                tabIndex={0} // Torna o elemento focável
                onKeyPress={(e) => e.key === 'Enter' && toggleMenu()} // Permite que o menu seja ativado com a tecla Enter
            >
                &#9776; {/* Ícone do menu */}
            </div>

            {/* Menu Responsivo */}
            <nav className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <Link to='/' onClick={toggleMenu}>Home</Link>
                <Link to='/fornecedor' onClick={toggleMenu}>Fornecedores</Link>
                <Link to='/cerimonialista' onClick={toggleMenu}>Cerimônialista</Link>
                <Link to='/galeria' onClick={toggleMenu}>Galeria</Link>
                <Link to='/sobre' onClick={toggleMenu}>Sobre</Link>
            </nav>
        </header>
    );
}

export default Header;