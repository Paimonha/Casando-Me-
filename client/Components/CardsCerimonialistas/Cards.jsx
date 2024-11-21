import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./Cards.css";

function Card() {
    return (
        <>
        <div className="Card">
            <nav className="Image"></nav>
            <div>
                <div className="Nome"></div>
                <div className="Descricao"></div>
            </div>

            <a className="Button"></a>
      
            <span className="Icons"></span>
            <span className="Icons"></span>
            <span className="Icons"></span>
        </div>
        </>
    );
}

export default Card;