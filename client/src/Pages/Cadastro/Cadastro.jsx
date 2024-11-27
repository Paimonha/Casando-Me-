import Logo from "../../Svg/Logo.svg";
import Icone from "../../Svg/Icone.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./Cadastro.css";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Verificar se as senhas coincidem
    if (senha !== confirmSenha) {
      setError("As senhas não coincidem");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/rota/register", {
        email,
        senha,
      });
      navigate("/login"); // Redirecionar para a página de login após o cadastro
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
            <form onSubmit={handleRegister} id="InputsCadastro">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Repita a Senha"
                value={confirmSenha}
                onChange={(e) => setConfirmSenha(e.target.value)}
                required
              />
              {error && <p className="error">{error}</p>}
              <p>
                Já possui uma conta? Faça seu <Link to="/login">Login</Link>
              </p>
              <div id="BtnLogar">
                <button type="submit">Cadastrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
