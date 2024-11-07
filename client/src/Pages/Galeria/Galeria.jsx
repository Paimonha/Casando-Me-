import { useState } from "react";
import { Link } from "react-router-dom";
import Header from '../../../Components/Header/Header'
import "./Galeria.css";
import Galerias from "../../../Components/GaleriaComponents";
import GaleriaDados from "../../data/GaleriaDados";


function Galeria() {
  return (
    <>
      {/* Cabeçalho */}
      <Header />
      {/* Conteúdo */}

      <div className="bb2">
      <section className="b1">
        {GaleriaDados.map((Galeria) => (
          <Galerias
            imagem={Galeria.imagem}
          />
        ))}
      </section></div>
        </>
    )
}
export default Galeria