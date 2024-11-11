import Logo from "../../Svg/Logo.svg";
import Icone from "../../Svg/Icone.svg";

import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./Cadastro.css";
function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [ConfiSenha, setConfSenha] = useState("");

  const ConfirmarSenha = () => {
    try {
      if (ConfiSenha == senha) {
        handleAddUser;
      }
    } catch (error) {
      setError(error.response?.data?.error || "Senha Errada");
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      await api.post("/register", { email, senha });
      setEmail("");
      setSenha("");
    } catch (error) {
      setError(error.response?.data?.error || "Erro ao cadastrar");
    }
  };
  return (
    <>
      <div id="PCadastro">
        <div id="CabecalhoCadastro">
          <div id="TituloCadastro">
            <span id="SpanCadastro">
              {" "}
              <p>Cadastro</p>
            </span>
          </div>
          <div id="Logo">
            <img src={Logo} alt="" />
          </div>
        </div>

        <div id="Cadastro">
          <div id="Icone">
            <img src={Icone} alt="" />
          </div>

          <div>
            <form onSubmit={handleAddUser} id="InputsCadastro">
              <input
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirmar Senha"
                value={ConfiSenha}
                onChange={(e) => setConfSenha(e.target.value)}
              />
              <p>
                já possui uma conta? <Link to="/login">Login</Link>
              </p>
              <button type="submit" id="BtnLogar" onSubmit={ConfirmarSenha}>
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cadastro;
