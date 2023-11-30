import "./TopBar.css";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../authSlice";

export function TopBar() {

    const dispatch = useDispatch()
    const isLogged = useSelector(state => state.authSlice.isLogged)

    return (
        <div id="topBar">

            <h1 id="appTitle">Bibliothèque Épheméria</h1>

            <hr id="topBarLine"/>
            
            {!isLogged &&  <Link to={"/login"}><button id="loginButton" type="button">Se connecter</button></Link>}

            {isLogged && 
                <div className="dropdown-center" id="dropdownContainer">
                    <img src="profile.svg" className="dropdown-toggle ms-5" type="button" data-bs-toggle="dropdown" aria-expanded="false" height={"55px"} id="dropdownImage"/>
                    <ul className="dropdown-menu text-center">
                        <li><a className="dropdown-item text-danger" href="#" onClick={()=>dispatch(removeUser())}>Déconnexion</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link to={"/profile"} className="dropdown-item">Profil</Link></li>
                    </ul>
                </div>
            }

        </div>  
    )
    
}