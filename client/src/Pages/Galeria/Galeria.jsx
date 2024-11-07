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


     {/*<div className="bb2">
      <section className="b1">
        <div className="Card">
          <img
            src="https://i.pinimg.com/564x/25/01/52/25015222872c8caee853ba073557e302.jpg "
            alt=""
            className="Filtro"
          />
        </div>
        <div className="Card">
          <img
            src="https://i.pinimg.com/564x/4f/30/91/4f3091a11fd7283c7b7652fec8a44684.jpg "
            alt=""
            className="Filtro"
          />
        </div>
        <div className="Card">
          <img
            src="https://i.pinimg.com/564x/0a/16/fb/0a16fbad2c481b33dded2f173018f92b.jpg "
            alt=""
            className="Filtro"
          />
        </div>
        <div className="Card">
          <img
            src="https://i.pinimg.com/564x/c7/28/bd/c728bd60f5f24363225af2a90e1e26b6.jpg "
            alt=""
            className="Filtro"
          />
        </div>
        <div className="Card">
          <img
            src="https://i.pinimg.com/564x/93/93/65/9393656917bc19d9ac195c3146a7f9b0.jpg "
            alt=""
            className="Filtro"
          />
        </div>
        <div className="Card">
          <img
            src="https://i.pinimg.com/564x/03/c2/f1/03c2f13ad2446e42c161d8f37100607d.jpg "
            alt=""
            className="Filtro"
          />
        </div>
        <div className="Card">
          <img
            src="https://i.pinimg.com/564x/c6/9d/37/c69d379071ab9045049fe7d8bf107a86.jpg "
            alt=""
            className="Filtro"
          />
        </div>
        <div className="Card">
          <img
            src="https://i.pinimg.com/564x/e3/43/24/e343242b64c1fb88cedb54e53134f861.jpg "
            alt=""
            className="Filtro"
          />
        </div>
        <div className="Card">
          <img
            src="https://i.pinimg.com/564x/6a/e7/97/6ae797b82de2a366139bbbc5b3d0d145.jpg "
            alt=""
            className="Filtro"
          />
        </div>
      </section>
      </div>

      {/*
      <div className="Div01">
        
      </div>
      */}
    </>
  );
}
export default Galeria;
