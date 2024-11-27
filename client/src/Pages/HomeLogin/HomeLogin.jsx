import { Link } from "react-router-dom";
import Header from "../../../Components/Header/Header";
import Logo from "../../Svg/Titulo.svg";
import { useState } from "react";
import "./HomeLogin.css";

function HomeLogin() {
  return (
    <>
      <div id="home">
        <Header />

        <div id="logo">
          <img src="../../public/Logo3.svg" alt="" />
        </div>

        <div className="Titulo">
          <img src="../../public/Titulo_Img.svg" alt="" />
        </div>

        <div id="texto">
          <span>
            Bem-vindo ao Casando-Me! Realize seu cadastro e tenha acesso aos
            nossos parceiros, incluindo cerimonialistas e locais para eventos.
            Através da nossa plataforma, você poderá enviar mensagens
            diretamente a esses profissionais para planejar o seu grande dia.
          </span>
        </div>
        <div id="botao">
          <Link to="/login">
            <button>Acesse Agora</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default HomeLogin;
