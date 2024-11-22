import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./Cards.css";
import api from '../../src/service/cerimonialistas'
import Cerimonialista from "../../src/Pages/Cerimonialista/Cerimonialista";



function Card() {
    return (
        <>
        <div className="Card">
            <nav className="Image"></nav>
            <div>
                {api.map}
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