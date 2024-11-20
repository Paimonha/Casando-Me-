import { useState } from "react";
import Logo from "../../../public/Logo2.svg";
import Icone from "../../Svg/Icone.svg";
import "./CadastroC.css";

function Cadastro_C() {
  const [telefone, setTelefone] = useState("");

  // Função para formatar telefone no padrão brasileiro
  const handleTelefoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número

    if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

    // Aplica máscara: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
    if (value.length > 10) {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (value.length > 6) {
      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{0,4})/, "($1) $2");
    }

    setTelefone(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar o telefone para o backend
    console.log("Telefone cadastrado:", telefone);
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
          <div id="Logo">
            <img src={Logo} alt="" />
          </div>
        </div>

        <div id="Cadastro">
          <div id="Icone">
            <img src={Icone} alt="" />
          </div>

          <div>
            <form id="InputsCadastro" onSubmit={handleSubmit}>
              <input type="email" placeholder="E-mail" required />
              <input type="password" placeholder="Senha" required />
              <input
                type="text"
                placeholder="Telefone"
                required
                value={telefone}
                onChange={handleTelefoneChange}
              />

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

export default Cadastro_C;
