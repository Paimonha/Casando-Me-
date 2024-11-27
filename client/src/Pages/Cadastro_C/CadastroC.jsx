import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../../public/Logo2.svg";
import Icone from "../../Svg/Icone.svg";
import InputMask from "react-input-mask";
import "./CadastroC.css";

function Cadastroc() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [instagram, setInstagram] = useState("");
  const [descricao, setDescricao] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegisterCeri = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/rota/registroCeri", {
        nome,
        email,
        telefone,
        whatsapp,
        instagram,
        descricao,
      });
      navigate("/cerimonialista"); // Redirecionar para a página de login após o cadastro
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
              <p>Cadastro Cerimonialistas</p>
            </span>
          </div>
          {/*  <div id="Logo">
            <img src={Logo} alt="" />
          </div>*/}
        </div>

        <div id="Cadastro">
          <div>
            <form onSubmit={handleRegisterCeri} id="InputsCadastro">
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="E-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputMask
                mask="(99) 99999-9999"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="Telefone"
                required
              />

              <InputMask
                mask="(99) 99999-9999"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="WhatsApp"
                required
              />

              <input
                type="text"
                placeholder="instagram"
                required
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />

              <input
                type="text"
                placeholder="descricao"
                required
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
              {error && <p>{error}</p>}
              <button type="submit" id="BtnLogar">
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastroc;
