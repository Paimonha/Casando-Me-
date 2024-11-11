import Header from '../../../Components/Header/Header'
import "./Formulario.css"

function Formulario(){
    return(
        <>
            <Header/>
            <div className='flexDisplayConteiner'>
                <div>
                    <div className='Title'>Formulário de Envio</div>
                </div>
                <form className='formsCerimonialista'>
                    <input type='text' placeholder='Nome:' className='nomeCerimonialista'></input>
                    <input type='text' placeholder='Telefone:' className='telefoneCerimonialista'></input>
                    <input type='email' placeholder='E-mail:'className='EmailCerimonialista'></input>
                    <textarea type='text' placeholder='Descrição:'className='descricaoCerimonialista'></textarea>
                    <div className='displayButton'>
                        <button className="button">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Formulario