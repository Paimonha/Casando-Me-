import "./Admin.css";
import Logo from "../../../src/Svg/Logo.svg";
import Sidebar from "../../../Components/SideBar/SideBar";
function Admin() {
  return (
    <>
      <div id="Admin">
        <Sidebar />

        <div id="Corpo">
          <span id="Titulo">
            <h1>Bem vindo! </h1>
            <h2>Tela de Administrador</h2>
          </span>
        </div>
      </div>
    </>
  );
}
export default Admin;
