import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faChurch,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Logo from "../../src/Svg/Logo.svg";
import "./SideBar.css";

function Sidebar() {
  const navigate = useNavigate(); // Hook para navegação após o logout

  const handleLogout = async () => {
    try {
      // Enviar a requisição para o servidor
      await axios.post("http://localhost:5000/api/rota/logout");

      // Remover o token JWT do localStorage
      localStorage.removeItem("authToken");

      // Redirecionar para a página de login
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Erro ao fazer logout", error);
    }
  };
  return (
    <>
      <div id="D">
        <div id="Side">
          <div id="MetadeIcon">
            <img src={Logo} alt="" />
            <div className="DivBox">
              {" "}
              <Link to="/adminf">
                {" "}
                <FontAwesomeIcon className="Box" icon={faBox} />{" "}
              </Link>
            </div>
            <div className="DivBox">
              {" "}
              <Link to="/adminc">
                {" "}
                <FontAwesomeIcon className="Box" icon={faChurch} />{" "}
              </Link>
            </div>
            <div className="DivBox">
              {" "}
              <Link to="/adminu">
                {" "}
                <FontAwesomeIcon className="Box" icon={faUser} />{" "}
              </Link>
            </div>
          </div>
          <div id="MetadeLogout">
            <div className="DivBox">
              {" "}
              <Link to="">
                {" "}
                <FontAwesomeIcon
                  className="Box"
                  icon={faRightFromBracket}
                  rotation={180}
                  onClick={handleLogout}
                />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
