import { Link } from "react-router-dom";
import Header from '../../../Components/Header'
import Logo from './Logo.svg'
import "./HomeLogin.css"

function HomeLogin() {
    return (
        <>
            <div id="home">
                <Header />

                <div id='logo'>
                    <img src={Logo} alt="" />
                </div>
                <div id='texto'>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </span>
                </div>
                <div id='botao'>
                  <Link to='/login'>
                  <button>Acesse Agora</button>
                  </Link>
                    

                </div>





            </div>
        </>)
}
export default HomeLogin