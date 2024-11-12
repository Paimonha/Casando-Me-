import "./Login.css";
import { Link } from "react-router-dom";
import Logo from "../../Svg/Logo.svg";
import Icone from "../../Svg/Icone.svg";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios'; 

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/rota/login', {
                email,
                password: senha,
            });

            const { token, role, userEmail } = response.data;

            // Faz o armazenamento do token no localStorage
            localStorage.setItem('token', token);

            // Verificar o papel do usuário ou o email para redirecionar corretamente
            if (email === 'ian@gmail.com') {  // Faz a Verificação do Email ser for ADM
                navigate('/admin');
            } else {
                navigate('/home');
            }
        } catch (error) {
            console.error('Erro ao fazer login', error);
            alert("Erro ao fazer login: " + (error.response ? error.response.data.error : error.message));
        }
    };

    return (
        <div id="P">
            <div id="Cabecalho">
                <div id="TituloL">
                    <span id="Span">Login</span>
                </div>
                <div id="Logo">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>

            <div id="Login">
                <div id="Icone">
                    <img src={Icone} alt="Ícone" />
                </div>

                <form onSubmit={handleLogin} id="Inputs">
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
                    <div id="BtnLogar">
                        <button type="submit">Logar</button>
                    </div>
                </form>

                <p>Esqueci minha <Link to="#">senha</Link></p>

                <Link to="/cadastro" id="LinkC">
                    <p>Cadastrar</p>
                </Link>
            </div>
        </div>
    );
}

export default Login;
