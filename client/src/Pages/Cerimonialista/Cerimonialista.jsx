import Header from "../../../Components/Header/Header";
import "./Cerimonialista.css";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Elipse from "../../../public/images/Ellipse.png";

function Cerimonialista() {
  const [cerimonialistas, setCerimo] = useState([]);

  useEffect(() => {
    loadCerimo();
  }, []);
  
  const loadCerimo = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/rota/registroCeri"
      );
      setCerimo(response.data);
    } catch (error) {
      console.error("Erro ao carregar usuario:", error);
    }
  };

  return (
    <>
      <div>
        <Header />
      </div>

      <div id="ListaC">
        <div id="ConteudoC">
          {cerimonialistas.map((cerimonialista) => (
            <div key={cerimonialista.id} id="listC"> {/* Alterado de span para div */}
              <div id="DivImg">
                <img src={Elipse} alt="" />
              </div>
              <div id="DivInfo">
                <h1>{cerimonialista.nome}</h1>
                <h3>{cerimonialista.descricao}</h3>
              </div>
              <div id="DivIcon">
                <Link to={cerimonialista.instagram} className="Icons">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link to={cerimonialista.whatsapp} className="Icons">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </Link>
                <Link to={cerimonialista.email} className="Icons">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <Link to="/cadastroc">
      <div className="ian-button" id="ian-button">
            Cadastre-se como cerimonialista
      </div>
      </Link>
    </>
  );
}

export default Cerimonialista;