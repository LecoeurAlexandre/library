import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
    
export function NavBar() {

    const [currentPage, setCurrentPage] = useState('');
    const location = useLocation();
    
    // Mettez à jour la page actuelle chaque fois que l'emplacement change
    useEffect(() => {
      setCurrentPage(location.pathname);
    }, [location]);


    return (
        <div id="divNavLeft">
            <div id="divNavLeftLogo">
                <Link to={"/"}><img src="../public/library.svg" id="navLogo"/></Link>
            </div>
            
            <div id="divNavLeftButtons">
                <Link className={currentPage === '/' ? 'navActive' : ''} to={"/"}><img src="../public/house.svg" id="navIcon"/></Link>
                <Link to={"/"}><img src="../public/search.svg" id="navIcon"/></Link>
                <Link to={"/"}><img src="../public/book.svg" id="navIcon"/></Link>
                <Link className={currentPage === '/news' ? 'navActive' : ''} to={"/news"}><img src="../public/newspaper.svg" id="navIcon"/></Link>
                <Link to={"/"}><img src="../public/question-circle.svg" id="navIconHelp"/></Link>
            </div>
        </div>      
    )
  }
   
