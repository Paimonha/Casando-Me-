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
          {cerimonialistas.map((cerimonialistas) => (
            <span key={cerimonialistas.id} id="listC">
              <div id="DivImg">
                <img src={Elipse} alt="" />
              </div>
              <div id="DivInfo">
                <h1>{cerimonialistas.nome}</h1>
                <h3>{cerimonialistas.descricao}</h3>
              </div>
              <div id="DivIcon">
              <Link to={cerimonialistas.instagram} className="Icons"><FontAwesomeIcon icon={faInstagram} /></Link> 
             <Link to={cerimonialistas.whatsapp} className="Icons"><FontAwesomeIcon icon={faWhatsapp} /></Link> 
             <Link to={cerimonialistas.email} className="Icons"><FontAwesomeIcon icon={faEnvelope} /></Link> 
                
              </div>
              {/*               
             

             <span> {cerimonialistas.descricao}</span>
             
           */}
            </span>
          ))}
        </div>
      </div>
     
    </>
  );
}
export default Cerimonialista;
