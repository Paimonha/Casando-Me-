import Header from "../../../Components/Header/Header";
import "./Sobre.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryQuarter, faSignal } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const integrantes = {
  techLeader: [
    {
      imagem: "../public/Ian.jpeg",
      nome: "Ian Lucca",
      descricao:
        "Lidera a equipe de tecnologia, garantindo comunicação e alinhamento",
      link: "https://linktr.ee/IanLucca",
    },
  ],
  desenvolvedores: [
    {
      imagem: "../public/Ricardo.jpeg",
      nome: "Ricardo",
      descricao: "Foco na parte do FrontEnd",
      link: "https://github.com/RicardoAndre69",
    },
    {
      imagem: "../public/Eu.jpeg",
      nome: "Davi",
      descricao: "Foco no BackEnd",
      link: "https://github.com/Paimonha",
    },
    {
      imagem: "../public/Sophipa.jpeg",
      nome: "Sophia",
      descricao: "Apoio na parte de designer do site",
      link: "https://github.com/sosovaladares20",
    },
  ],
  taskManager: [
    {
      imagem: "../public/Felipe.jpeg",
      nome: "Felipe",
      descricao:
        "Gerencia tarefas e cria diagramas de classes para organização.",
      link: "https://github.com/Felporr",
    },
  ],
};
function Sobre() {
  const [currentTeam, setCurrentTeam] = useState(null);
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (team) => {
    setCurrentTeam(team);
    setCurrentMemberIndex(0);
    setIsModalOpen(true);
  };

  const nextMember = () => {
    if (currentTeam) {
      setCurrentMemberIndex(
        (prevIndex) => (prevIndex + 1) % integrantes[currentTeam].length
      );
    }
  };

  const prevMember = () => {
    if (currentTeam) {
      setCurrentMemberIndex(
        (prevIndex) =>
          (prevIndex - 1 + integrantes[currentTeam].length) %
          integrantes[currentTeam].length
      );
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTeam(null);
  };
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="sobre-nos">
        <div className="sobre-box">
          <div className="sobre-nos-icons">
            <span id="sobre-nos-icons-span">4:54</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M576 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32l0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352c0-17.7 14.3-32 32-32zM352 224l0 256c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32zM96 416l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M464 160c8.8 0 16 7.2 16 16l0 160c0 8.8-7.2 16-16 16L80 352c-8.8 0-16-7.2-16-16l0-160c0-8.8 7.2-16 16-16l384 0zM80 96C35.8 96 0 131.8 0 176L0 336c0 44.2 35.8 80 80 80l384 0c44.2 0 80-35.8 80-80l0-16c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-16c0-44.2-35.8-80-80-80L80 96zm272 96L96 192l0 128 256 0 0-128z" />
            </svg>
          </div>
          <div className="sobre-img">
            <img src="../../public/Tech.svg" alt="" />
          </div>
          <div className="sobre-text">
            <h1>Tech Leader</h1>
            <label className="sobre-text-label">
              Conecta as necessidades do cliente ao desenvolvimento e alinha os
              integrantes do grupo
            </label>
            <button
              onClick={() => handleButtonClick("techLeader")}
              className="button_Open"
            >
              Ver Integrante
            </button>
          </div>
        </div>

        <div className="sobre-box">
          <div className="sobre-nos-icons">
            <span>4:54</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M576 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32l0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352c0-17.7 14.3-32 32-32zM352 224l0 256c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32zM96 416l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M464 160c8.8 0 16 7.2 16 16l0 160c0 8.8-7.2 16-16 16L80 352c-8.8 0-16-7.2-16-16l0-160c0-8.8 7.2-16 16-16l384 0zM80 96C35.8 96 0 131.8 0 176L0 336c0 44.2 35.8 80 80 80l384 0c44.2 0 80-35.8 80-80l0-16c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-16c0-44.2-35.8-80-80-80L80 96zm272 96L96 192l0 128 256 0 0-128z" />
            </svg>
          </div>
          <div className="sobre-img">
            <img src="../../public/Developer.svg" alt="" />
          </div>
          <div className="sobre-text">
            <h1>Desenvolvedores</h1>
            <label className="sobre-text-label">
              Define a estrutura técnica do produto, assegurando escalabilidade
              e tornando o produto real.
            </label>
            <button
              onClick={() => handleButtonClick("desenvolvedores")}
              className="button_Open"
            >
              Ver Integrantes
            </button>
          </div>
        </div>

        <div className="sobre-box">
          <div className="sobre-nos-icons">
            <span>4:54</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M576 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32l0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352c0-17.7 14.3-32 32-32zM352 224l0 256c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32zM96 416l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M464 160c8.8 0 16 7.2 16 16l0 160c0 8.8-7.2 16-16 16L80 352c-8.8 0-16-7.2-16-16l0-160c0-8.8 7.2-16 16-16l384 0zM80 96C35.8 96 0 131.8 0 176L0 336c0 44.2 35.8 80 80 80l384 0c44.2 0 80-35.8 80-80l0-16c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-16c0-44.2-35.8-80-80-80L80 96zm272 96L96 192l0 128 256 0 0-128z" />
            </svg>
          </div>
          <div className="sobre-img">
            <img src="../../public/Manager.svg" alt="" />
          </div>
          <div className="sobre-text">
            <h1>Task Manager</h1>
            <label className="sobre-text-label">
              Cuida das tarefas que serao realizadas pelo grupo e cria diagramas
              de classes para o projeto
            </label>
            <button
              onClick={() => handleButtonClick("taskManager")}
              className="button_Open"
            >
              Ver Integrantes
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <div className="carousel-content">
              {/* Exibe a imagem se estiver disponível */}
              {integrantes[currentTeam][currentMemberIndex].imagem && (
                <img
                  src={integrantes[currentTeam][currentMemberIndex].imagem}
                  alt={integrantes[currentTeam][currentMemberIndex].nome}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
              )}
              <h3>{integrantes[currentTeam][currentMemberIndex].nome}</h3>
              <p>{integrantes[currentTeam][currentMemberIndex].descricao}</p>

              {/* Verifica o link e mostra o ícone correspondente */}
              {integrantes[currentTeam][currentMemberIndex].link && (
                <a
                  href={integrantes[currentTeam][currentMemberIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block", marginTop: "10px" }}
                >
                  {currentTeam === "techLeader" ? (
                    // Linktree ícone para techLeader
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      viewBox="0 0 417 512.238"
                      style={{ width: "30px", height: "30px", fill: "#43E660" }}
                    >
                      <path
                        fill="#43E660"
                        fillRule="nonzero"
                        d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z"
                      />
                    </svg>
                  ) : (
                    // GitHub ícone para outros integrantes
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      style={{ width: "30px", height: "30px", fill: "#181717" }}
                    >
                      <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
                    </svg>
                  )}
                </a>
              )}
            </div>

            {/* Controles do carrossel apenas para mostrar os botões de proximo ou voltar*/}
            {currentTeam === "desenvolvedores" && (
              <div className="carousel-controls">
                <button onClick={prevMember}>Anterior</button>
                <button onClick={nextMember}>Próximo</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
export default Sobre;
