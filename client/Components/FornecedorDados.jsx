
import { useState } from "react";

function Fornecedor({ nome, descricao, imagem }) {
  
    return (
      <div className="fornecedor-card">
        <h2>{nome}</h2>
        <img src={imagem} alt={nome} className="fornecedor-imagem" />
        <p className="fornecedor-descricao">
          <strong>{nome}:</strong> {descricao}
        </p>
        
      </div>
      
    );
  }
  
  export default Fornecedor;