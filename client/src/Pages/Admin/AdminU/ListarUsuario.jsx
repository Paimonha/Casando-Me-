import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminU.css";
const ListUser = ({ onEdit, onDelete }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/rota/register"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao carregar usuario:", error);
    }
  };

  return (
    <div id="ListaU">
      <div id="Conteudo">
        {users.map((users) => (
          <span key={users.id} id="list">
            <h4>Usuário</h4>
            <label>Email: {users.email}</label>
            <div id="ButtonsU">
              <button onClick={() => onEdit(users)} className="btnU">
                Editar
              </button>
              <button onClick={() => onDelete(users.id)} className="btnU">
                Excluir
              </button>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ListUser;
