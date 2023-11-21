import "./NavBar.css";
import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <>
        <div id="divNavLeft">
            <div id="first-square"><Link className="navbar-brand" to={"/"}><img src="../../public/house.svg" id="navbarLogo"/></Link></div>
            <div id="second-square"><Link className="navbar-brand" to={"/"}><img src="../../public/search.svg" id="navbarLogo"/></Link></div>
            <div id="third-square"><Link className="navbar-brand" to={"/"}><img src="../../public/book.svg" id="navbarLogo"/></Link></div>
            <div id="fourth-square"><Link className="navbar-brand" to={"/"}><img src="../../public/newspaper.svg" id="navbarLogo"/></Link></div>
            <div id="fifth-square"><Link className="navbar-brand" to={"/"}><img src="../../public/question-circle.svg" id="navbarLogo"/></Link></div>
        </div>

        <div id="divNavTop">
            <h1 id="navTitle">Bibliothèque</h1>
            <hr id="navLine"/>
            <Link to={"/"}><img src="../../public/profile.svg" id="profileLogo"/></Link>
        </div>

        <div id="divNavBot">
        </div>
        </>
    )
  }
   
