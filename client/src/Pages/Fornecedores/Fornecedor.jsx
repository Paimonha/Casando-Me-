import "./Fornecedor.css";
import Fornecedor from "../../../Components/FornecedorDados";
import fornecedoresDados from "../../data/FornecedorDados";
import Header from "../../../Components/Header";



function Fornecedores() {
  return (
    <>
      <Header/>
 
     <div className="bb1">
      <section className="fornecedores-container">
        {fornecedoresDados.map((fornecedor) => (
          <Fornecedor
            key={fornecedor.nome}
            nome={fornecedor.nome}
            descricao={fornecedor.descricao}
            imagem={fornecedor.imagem}
          />
        ))}
      </section></div>
    </>
  );
}

export default Fornecedores;
