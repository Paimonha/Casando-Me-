import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChurch,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Logo from "../../src/Svg/Logo.svg";
import "./SideBar.css";
import { useState } from "react";

function Sidebar() {
  const navigate = useNavigate();
  const [isMinimized, setIsMinimized] = useState(false);

  const handleLogout = async () => {
    try {  //Envia a requisição para o Servidor
      await axios.post("http://localhost:5000/api/rota/logout");
      localStorage.removeItem("authToken"); //Remove o token JWT
      navigate("/", { replace: true }); //Redireciona para a pagina de HomeLogin
    } catch (error) {
      console.error("Erro ao fazer logout", error);
    }
  };

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div id="D">
      <div id="Side" className={isMinimized ? "minimized" : ""}>
        <div id="MetadeIcon">
          {/* Logo visível apenas quando não minimizada */}
          {!isMinimized && <img src={Logo} alt="Logo" />}

          {/* Botão para alternar minimização */}

          <div className="DivBox">
            <Link to="/adminc">
              <FontAwesomeIcon className="Box" icon={faChurch} />
            </Link>
          </div>
          <div className="DivBox">
            <Link to="/adminu">
              <FontAwesomeIcon className="Box" icon={faUser} />
            </Link>
          </div>
        </div>
        <div id="MetadeLogout">
          <div className="DivBox">
            <Link to="">
              <FontAwesomeIcon
                className="Box"
                icon={faRightFromBracket}
                rotation={180}
                onClick={handleLogout}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
