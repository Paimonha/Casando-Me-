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
                <span className="Span">Home </span>
                </Link>
                
                <Link to='/login'>
                <span className="Span">Fornecedores </span>
                </Link>

                <Link  to='/login'>
                <span className="Span">Cerimônialista </span>
                </Link>
                <Link  to='/login'>
                <span className="Span">Galeria </span>
                </Link >

                <Link  to='/login'>
                <span className="Span">Sobre </span>
                </Link>
           
            
            
           

            </div>
            <div id="Svg">
                
                <FontAwesomeIcon id="Login" icon={faRightFromBracket} style={{color: "#f2dcd8",}} />
                <Link to="/login"></Link>
            

            </div>


        </header>
        </>
    )
}
export default Header