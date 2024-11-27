import "./AdminU.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../../Components/SideBar/SideBar";
import EditUser from "./EditarUsuario";
import ListUser from "./ListarUsuario";
import axios from "axios";

const AdminU = () => {
  const [editingUser, setEditingUser] = useState(null);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/rota/register/${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
    }
  };

  const handleUserUpdated = () => {
    setEditingUser(null);
    window.location.reload();
  };

  return (
    <>
      <div id="U">
        <Sidebar />
        <div id="BodyU">
          <div id="CabecalhoU">
            <h1>Lista de Usuario</h1>
          </div>

          {editingUser ? (
            <EditUser user={editingUser} onUserUpdated={handleUserUpdated} />
          ) : (
            <ListUser onEdit={handleEdit} onDelete={handleDelete} />
          )}
        </div>
      </div>
    </>
  );
};
export default AdminU;
