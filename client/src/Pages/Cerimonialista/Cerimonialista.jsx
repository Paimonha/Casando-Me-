import React, { useState, useEffect } from 'react';
import Header from '../../../Components/Header/Header'
import "./Cerimonialista.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import api from '../../service/cerimonialistas'

const CerimonialistaList = ({onEdit, onDelete}) => {
    const [ cerimonialista, setCerimonialista ] = useState([]);

    useEffect(() => {
        loadCerimonialistas();
    }, [])

    const loadCerimonialistas = async () => {
        try {
            const response = await api.get('http://localhost:5000/api/rota/Cerimonialista');
            setCerimonialista(response.data);
        }catch (error){
            console.error('Erro ao carregar cerimonialistas:', error)
        }
    }


    return(
        <>
        <div>
        <Header />
        </div>



        <div>
            <h2>Lista Cerimonialistas</h2>
            <div>
                {cerimonialista.map(cerimonialista => (
                    <div key={cerimonialista.id} className='cards'>
                        <nav className="Image"></nav>
                        <div>
                                {api.map}
                                <div className="Nome"></div>
                                <div className="Descricao"></div>
                        </div>

                        <a className="Button"></a>
                        
                        <span className="Icons"></span>
                            <span className="Icons"></span>
                            <span className="Icons"></span>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
export default CerimonialistaList