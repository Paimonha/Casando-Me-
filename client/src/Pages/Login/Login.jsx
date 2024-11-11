import "./Login.css"
import { Link } from "react-router-dom";
import Logo from "../../Svg/Logo.svg"
import Icone from "../../Svg/Icone.svg"
function Login() {
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

                    <div id="Inputs">

                        <input type="text" placeholder="E-mail" />
                        <input type="password" placeholder="Password" />

                    </div>
                    <p>Esqueci minha <Link to="#"> senha</Link></p>

                    <div id="BtnLogar">
                        <button>Logar</button>

                    </div>
                    <Link to="/cadastro" id="LinkC"><p>Cadastrar</p></Link>




                </div>



            </div>


        </>
    )
}
export default Login