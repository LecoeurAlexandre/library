import "./TopBar.css";
import { Link } from "react-router-dom";

export function TopBar() {
    return (
        <div id="topBar">
            <h1 id="appTitle">Bibliothèque Épheméria</h1>
            <hr id="topBarLine"/>
            <Link to={"/"}><button id="loginButton" type="button">Se connecter</button></Link>
        </div>  
    )
    
}