import "./AdminC.css";
import Sidebar from "../../../../Components/SideBar/SideBar";
import axios from "axios";
import { useState } from "react";
import EditCerimo from "./EditarCerimo";
import ListCerimo from "./ListaCerimo";
function AdminC() {
  const [editingCerimo, setEditingCerimo] = useState(null);

  const handleEdit = (cerimonialista) => {
    setEditingCerimo(cerimonialista);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/rota/registroCeri/${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
    }
  };

  const handleCerimoUpdated = () => {
    setEditingCerimo(null);
    window.location.reload();
  };
  return (
    <>
      <div id="C">
        <Sidebar />
        <div id="BodyC">
          <div id="Tcerimonialista">
            <h1>Cerimônialista</h1>
          </div>
          {editingCerimo ? (
            <EditCerimo
              ceri={editingCerimo}
              onCerimoUpdate={handleCerimoUpdated}
            />
          ) : (
            <ListCerimo onEdit={handleEdit} onDelete={handleDelete} />
          )}
        </div>
      </div>
    </>
  );
}
export default AdminC;
