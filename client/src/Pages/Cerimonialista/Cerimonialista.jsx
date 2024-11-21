import Header from '../../../Components/Header/Header'
import "./Cerimonialista.css"
import Card from '../../../Components/CardsCerimonialistas/Cards'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
function Cerimonialista(){
    return(
        <>
        <div>
        <Header />
        </div>

        <Card/>

        <div className="ian-bocas">
        <div className="cerimonialista-box">
            <div className='ian-cima'>
                <h1>Roberto Carlos</h1>
                <div className="ian-cima-icons">
                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4112 11.75H11.77L11.8849 11.4101L15.215 1.56105L18.545 11.4101L18.66 11.75H19.0187H28.9886L20.6109 18.3574L20.3339 18.5759L20.4469 18.9101L23.711 28.564L15.5246 22.1074L15.215 21.8632L14.9053 22.1074L6.71895 28.564L9.98301 18.9101L10.096 18.5759L9.81899 18.3574L1.44136 11.75H11.4112Z" stroke="black"/>
                    </svg>
                    <h1>4,5</h1>
                </div>
            </div>
            <div className='gray-circle'>
                <img src="/public/images/images.jpg"/>
            </div>
            <div className="ian-lado">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </div>
            
        </div>

        <div className="cerimonialista-box">
            <div className='ian-cima'>
                <h1>Roberto Carlos</h1>
                <div className="ian-cima-icons">
                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4112 11.75H11.77L11.8849 11.4101L15.215 1.56105L18.545 11.4101L18.66 11.75H19.0187H28.9886L20.6109 18.3574L20.3339 18.5759L20.4469 18.9101L23.711 28.564L15.5246 22.1074L15.215 21.8632L14.9053 22.1074L6.71895 28.564L9.98301 18.9101L10.096 18.5759L9.81899 18.3574L1.44136 11.75H11.4112Z" stroke="black"/>
                    </svg>
                    <h1>4,5</h1>
                </div>
                
            </div>
            <div className='gray-circle'>
                <img src="/public/images/images.jpg"/>
            </div>
            <div className="ian-lado">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </div>
            
        </div>

        <div className="cerimonialista-box">
            <div className='ian-cima'>
                <h1>Roberto Carlos</h1>
                <div className="ian-cima-icons">
                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4112 11.75H11.77L11.8849 11.4101L15.215 1.56105L18.545 11.4101L18.66 11.75H19.0187H28.9886L20.6109 18.3574L20.3339 18.5759L20.4469 18.9101L23.711 28.564L15.5246 22.1074L15.215 21.8632L14.9053 22.1074L6.71895 28.564L9.98301 18.9101L10.096 18.5759L9.81899 18.3574L1.44136 11.75H11.4112Z" stroke="black"/>
                    </svg>
                    <h1>4,5</h1>
                </div>
                
            </div>
            <div className='gray-circle'>
                <img src="/public/images/images.jpg"/>
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