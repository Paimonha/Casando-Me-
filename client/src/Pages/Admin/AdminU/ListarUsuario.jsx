import './AdminU.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const ListUser = ({ onEdit, onDelete }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/rota/login');
        setUsers(response.data);
      } catch (error) {
        console.error('Erro ao carregar usuarios:', error);
      }
    };
    return (
     <> 
    <div id="U">
       
        <div id='BodyU'>
            <div>
                <h2>Lista de Usuarios</h2>
                <ul>
                    {users.map(users => (
                        <li key={users.id} className='list'>
                            {users.email} - {users.senha}
                            
                            <button onClick={() => onEdit(users)} className='btnEdit'>Editar</button>
                            <button onClick={() => onDelete(users.id)} className='btnExcluir'>Excluir</button>
                        </li>
                    ))}
                </ul>
            </div>


        </div>

    </div>


    </>
    )

}
export default ListUser