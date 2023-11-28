import "./TopBar.css";
import { Link } from "react-router-dom";
import {getCookie} from "../../screens/loginScreen/LoginScreenHttpHandle"
import { jwtDecode } from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../authSlice";

export function TopBar() {

    const dispatch = useDispatch()
    const isLogged = useSelector(state => state.authSlice.isLogged)

    if (getCookie('token')) {
        const decodedToken = jwtDecode(getCookie('token'));
        console.log(decodedToken);
        const currentTime = Date.now() / 1000;   
        console.log(decodedToken.exp < currentTime);

        if (decodedToken.exp < currentTime) {
            isLogged = false;
        } else {
            isLogged = true;
        }
    }


    return (
        <div id="topBar">

            <h1 id="appTitle">Bibliothèque Épheméria</h1>

            <hr id="topBarLine"/>
            
            {!isLogged &&  <Link to={"/login"}><button id="loginButton" type="button">Se connecter</button></Link>}

            {isLogged && 
                <div class="dropdown-center" id="dropdownContainer">
                    <img src="profile.svg" class="dropdown-toggle ms-5" type="button" data-bs-toggle="dropdown" aria-expanded="false" height={"55px"} id="dropdownImage"/>
                    <ul class="dropdown-menu text-center">
                        <li><a class="dropdown-item text-danger" href="#" onClick={()=>dispatch(removeUser())}>Déconnexion</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Profil</a></li>
                        <li><a class="dropdown-item" href="#">Liste de souhait</a></li>
                    </ul>
                </div>
            }

        </div>  
    )
    
}