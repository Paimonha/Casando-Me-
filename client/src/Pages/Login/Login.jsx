import "./Login.css";
import { Link } from "react-router-dom";
import Logo from "../../Svg/Logo.svg";
import Icone from "../../Svg/Icone.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/rota/login",
        {
          email,
          password,
        }
      );

      const { token, role } = response.data;

      // Armazenar o token no localStorage ou sessionStorage
      localStorage.setItem("token", token);

      // Redirecionar o usuário dependendo do papel
      if (email === "ian@gmail.com") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.error("Erro ao fazer login", error);
    }
  };

  return (
    <>
      <div id="P">
        <div id="Cabecalho">
          <div id="TituloL">
            <span id="Span">Login</span>
          </div>
          <div id="Logo">
            <img src={Logo} alt="" />
          </div>
        </div>

        <div id="Login">
          <div id="Icone">
            <img src={Icone} alt="" />
          </div>

          <div>
            <form onSubmit={handleLogin} id="Inputs">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="senha"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </form>
          </div>
          {/*   <p>Esqueci minha <Link to="#"> senha</Link></p> */}
          <br />
          <div id="BtnLogar">
            <button>Logar</button>
          </div>
          <Link to="/cadastro">
            <p id="LinkC">Já tem Cadastro?</p>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Login;
