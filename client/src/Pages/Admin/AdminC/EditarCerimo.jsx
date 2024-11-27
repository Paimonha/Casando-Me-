import React, { useState, useEffect } from "react";
import axios from "axios";
import "../AdminC/AdminC.css";

const EditCerimo = ({ ceri, onCerimoUpdate }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [instagram, setInstagram] = useState("");
  const [descricao, setDescricao] = useState("");
  useEffect(() => {
    setNome(ceri.nome);
    setEmail(ceri.email);
    setTelefone(ceri.telefone);
    setWhatsapp(ceri.whatsapp);
    setInstagram(ceri.instagram);
    setDescricao(ceri.descricao);
  }, [ceri]);

  const handleUpdateCerimo = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/api/rota/registroCeri/${ceri.id}`,
        {
          nome,
          email,
          telefone,
          whatsapp,
          instagram,
          descricao,
        }
      );
      onCerimoUpdate();
    } catch (error) {
      console.error("Erro ao atualizar o cerimonialista:", error);
    }
  };
  return (
    <>
      <div id="EditUsuario">
        <h2>Editar Usuário</h2>
        <div id="DivForms">
          <form onSubmit={handleUpdateCerimo} id="Forms">
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
            <input
              type="text"
              placeholder="Telefone"
              required
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />

            <input
              type="text"
              placeholder="Whatsap"
              required
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
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

            <button type="submit">Atualizar</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default EditCerimo;
