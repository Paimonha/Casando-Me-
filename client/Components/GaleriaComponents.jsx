import { useState } from "react";

function Galerias({imagem }) {
    return (
      <>
        <div className="Card">
          <img src={imagem} alt={imagem} className="Filtro" />
        </div>
      </>
    );
  }
  
  export default Galerias;