import "./Login.css"
import Logo from "./Logo.svg"
import Icone from "./Icone.svg"
function Login() {
    return (
        <>
            <div id="P">
                <div id="Cabecalho">
                    <div id="Titulo">

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

                            <input type="text" placeholder="E-mail"/>
                            <input type="password" placeholder="Password"/>

                        </div>
                        <p>Esqueci minha senha</p>
                        
                        <div id="BtnLogar">
                            <button>Logar</button>

                        </div>


                        

                    </div>


                
            </div>


        </>
    )
}
export default Login