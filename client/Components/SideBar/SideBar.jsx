import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faChurch, faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../src/Svg/Logo.svg'
import './SideBar.css'

function Sidebar() {
    return (
        <>
        <div id="D">
            <div id="Side">
                <div id="MetadeIcon" >
                    <img src={Logo} alt="" />
                    <div className="DivBox"> <Link to="/adminf"> <FontAwesomeIcon className="Box" icon={faBox} /> </Link></div>
                    <div className="DivBox"> <Link to="/adminc"> <FontAwesomeIcon className="Box" icon={faChurch} /> </Link></div>
                    <div className="DivBox"> <Link to="/adminu"> <FontAwesomeIcon className="Box" icon={faUser} /> </Link></div>
                </div>
                <div id="MetadeLogout">
                        <div className="DivBox"> <Link to="/login"> <FontAwesomeIcon className="Box" icon={faRightFromBracket}rotation={180}  /> </Link></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sidebar