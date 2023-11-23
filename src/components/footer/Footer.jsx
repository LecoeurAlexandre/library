import "./Footer.css"

export function Footer() {
    return (
        <div id="footerContainer">
            <ul id="footerList">
                <li><a href="">À propos</a></li>
                <li><a href="">Nous contacter</a></li>
                <li><a href="">Plan d'accès</a></li>
                <li><a href="">Mentions légales</a></li>
            </ul>    

            <div id="verticalLineFooter"></div>

            <div id="divRightFooter">
                <h2 id="socialTitle">Nos réseaux sociaux :</h2>
                <a href="#"><img src="../../public/facebook.svg"/></a>
                <a href="#"><img src="../../public/twitter.svg"/></a>
                <a href="#"><img src="../../public/instagram.svg"/></a>
                <a href="#"><img src="../../public/linkedin.svg"/></a>
            </div>
        </div>
    )
}