import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faRightFromBracket}from "@fortawesome/free-solid-svg-icons";
import "./Header.css"

function Header(){
    return(
        <>
            <header id="Header">
                <div id="Texto">
                    <Link to='/'> 
                    <span className="Span"> <p>Home</p> </span>
                    </Link>
                    <Link to='/cadastro'>
                    <span className="Span"> <p>Fornecedores</p> </span>
                    </Link>
                    <Link  to='/cadastro'>
                    <span className="Span"> <p>Cerimônialista</p> </span>
                    </Link>
                    <Link  to='/cadastro'>
                    <span className="Span"> <p>Galeria</p> </span>
                    </Link >
                    <Link  to='/cadastro'>
                    <span className="Span"> <p>Sobre</p> </span>
                    </Link>
                </div>

                <div id="Svg">
                    <Link to="/cadastro" >
                        <FontAwesomeIcon id="log" icon={faRightFromBracket} style={{color: "#f2dcd8",}} />
                    </Link>
                </div>
            </header>
        </>
    )
}
export default Header