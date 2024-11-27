import React, { useState, useEffect } from "react";
import axios from "axios";
import "../AdminC/AdminC.css";
const ListCerimo = ({ onEdit, onDelete }) => {
  const [cerimonialistas, setCerimo] = useState([]);

  useEffect(() => {
    loadCerimo();
  }, []);
  const loadCerimo = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/rota/registroCeri"
      );
      setCerimo(response.data);
    } catch (error) {
      console.error("Erro ao carregar usuario:", error);
    }
  };

  return (
    <>
      <div id="ListaU">
        <div id="Conteudo">
          {cerimonialistas.map((cerimonialistas) => (
            <span key={cerimonialistas.id} id="list">
              <h4>Cerimonialista</h4>
              <label>Nome: {cerimonialistas.nome}</label>
              <label>Email: {cerimonialistas.email}</label>
              <label>Telefone: {cerimonialistas.telefone}</label>
              <label>Whatsapp: {cerimonialistas.whatsapp}</label>
              <label>Instagram: {cerimonialistas.instagram}</label>
              <label>Descricao: {cerimonialistas.descricao}</label>
              <div id="ButtonsU">
                <button
                  onClick={() => onEdit(cerimonialistas)}
                  className="btnU"
                >
                  Editar
                </button>
                <button
                  onClick={() => onDelete(cerimonialistas.id)}
                  className="btnU"
                >
                  Excluir
                </button>
              </div>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
export default ListCerimo;
