import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faRightFromBracket}from "@fortawesome/free-solid-svg-icons";
import "./Header.css"
function Header(){
    return(
        <>
        <header id="Header">
            <div id="Texto">
            <span className="Span">Home </span>
            <span className="Span">Fornecedores </span>
            <span className="Span">Cerimônialista </span>
            <span className="Span">Galeria </span>
            <span className="Span">Sobre </span>
            </div>
            <div id="Svg">
                <FontAwesomeIcon id="Login" icon={faRightFromBracket} style={{color: "#f2dcd8",}} />
            

            </div>


        </header>
        </>
    )
}
export default Header