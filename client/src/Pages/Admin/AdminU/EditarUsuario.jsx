import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditUser = ({ user, onUserUpdated }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    setEmail(user.email);
    setSenha(user.senha);

  }, [user]);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/rota/register/${user.id}`, { email, senha });
      onUserUpdated();
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error);
    }
  };

  return (
    <div id='EditUsuario'>
      <h2>Editar Usuário</h2>
      <div id="DivForms">
      <form onSubmit={handleUpdateUser} id='Forms'>
      <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
  
        <button type="submit">Atualizar</button>
      </form>
      </div>
    </div>
  );
};

export default EditUser;