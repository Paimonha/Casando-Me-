import Header from '../../../Components/Header/Header'
import "./Cerimonialista.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
function Cerimonialista(){
    return(
        <>
        <div>
            <Header />
        </div>

        <div className="ian-bocas">
        <div className="cerimonialista-box">
        <div className='ian-cima'>
            <h1 className="cerimonialista-h1">Roberto Carlos</h1>
            
        </div>
            <div className='gray-circle'>
                <img src="/public/images/user-pfp.png"/>
            </div>
            <div className="ian-lado">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </div>
            
        </div>

        <div className="cerimonialista-box">
        <div className='ian-cima'>
            <h1 className="cerimonialista-h1">Leandro Barros</h1>
        </div>
            <div className='gray-circle'>
                <img src="/public/images/user-pfp.png"/>
            </div>
            <div className="ian-lado">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </div>
            
        </div>

        <div className="cerimonialista-box">
        <div className='ian-cima'>
            <h1 className="cerimonialista-h1">Ana Brito</h1>
        </div>
            <div className='gray-circle'>
                <img src="/public/images/user-pfp.png"/>
            </div>
            <div className="ian-lado">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                </h1>
            </div>
            <div className="ian-button-contate" id="ian-button-contate">
                Contate
            </div>
            
        </div>
        </div>

        <div className="ian-button" id="ian-button">
            Cadastre-se como cerimonialista
        </div>
        </>
    )
}
export default Cerimonialista