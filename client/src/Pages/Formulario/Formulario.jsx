import React, { useState } from 'react';
import Header from '../../../Components/Header/Header'
import api from '../../service/cerimonialistas';
import "./Formulario.css"

const Formulario = ({emCerimonialistaAdicionado}) => {
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [instagram, setInstagram] = useState('')
    const [descricao, setDescricao] = useState('')

    const handleAdicionarCerimonialista = async (e) =>{
        e.preventDefault();
        try {
            await api.post('/http://localhost:5000/api/rota/registerC', {nome, telefone, email, whatsapp, instagram, descricao});
            setNome('');
            setTelefone('');
            setEmail('');
            setWhatsapp('');
            setInstagram('');
            setDescricao('');
            emCerimonialistaAdicionado();
            
        }catch (error){
            console.error('Error ao cadastrar: ',error)
        }
    };

    return(
        <>
            <Header/>
            <div className='flexDisplayConteiner'>
                <div>
                    <div className='Title'>Formulário de Envio</div>
                </div>
                <form onSubmit={handleAdicionarCerimonialista} className='formsCerimonialista'>
                    <input
                        type="text"
                        placeholder="Nome: "
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Telefone: "
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Email: "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Whatsapp: "
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Instagram (opcional): "
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                        
                    />
                     <input
                        type="textArea"
                        placeholder="Descricao: "
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}                    
                    />
                    <div className='displayButton'>
                        <button type="submit" className='button'>Cadastrar</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Formulario