import Header from "../../../Components/Header/Header";
import "./Formulario.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Formulario() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_y5zzma7", "template_u27dayb", form.current, {
        publicKey: "9mjIXJags-hzgSUR3",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Enviado");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Error");
        }
      );
  };
  return (
    <>
      <Header />
      <div className="flexDisplayConteiner">
        <div>
          <div className="Title">Formulário de Envio</div>
        </div>
        {/*   <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Descrição</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form> */}

        <form ref={form} onSubmit={sendEmail} className="formsCerimonialista">
          <input
            type="text"
            name="to_name"
            placeholder="Nome:"
            className="nomeCerimonialista"
          ></input>
          <input
            type="text"
            name="from_telefone"
            placeholder="Telefone:"
            className="telefoneCerimonialista"
          ></input>
          <input
            type="email"
            name="from_email"
            placeholder="E-mail:"
            className="EmailCerimonialista"
          ></input>
          <textarea
            name="descricao"
            placeholder="Descrição:"
            className="descricaoCerimonialista"
          ></textarea>
          <div className="displayButton">
            <button type="submit" value="Send" className="button">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Formulario;
