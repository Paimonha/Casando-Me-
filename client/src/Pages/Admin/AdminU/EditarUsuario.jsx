import React, { useState, useEffect } from 'react';

import axios from 'axios'; 

const EditUser = ({ usuario, onUserUpdated }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
 
  useEffect(() => {
    setEmail(usuario.email)
    setSenha(usuario.senha)
  }, [usuario]);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/usuario/${usuario.id}`, { email, senha });
      onUserUpdated();
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error);
    }
  };

  return (
    <div>
      <h2>Editar produto</h2>
      <form onSubmit={handleUpdateProduct}>
      <input
          type="text"
          placeholder="Email"
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
      
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default EditUser;