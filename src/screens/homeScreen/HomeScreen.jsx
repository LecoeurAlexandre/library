import "./HomeScreen.css"
import { Link } from "react-router-dom"


export function HomeScreen () {
    return (
        <>
            <div id="homeContainer">
                <div id="homeSubContainer">

                    <div id="divCarousel">
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <img src="./libraryInside.jpg" className="d-block w-100"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="fs-4">Rénovation de la salle Émile Zola terminée</h5>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="./carousel2(1).png" className="d-block w-100"/>
                                <div className="carousel-caption d-none d-md-block mb-3">
                                    <h5 className="fs-3">Mise en ligne de notre site web !</h5>
                                    <p className="fs-5">Découvrez comment l'utiliser sur notre page <Link to="/" className="text-decoration-none text-light" id="carousel-website-link"><strong >En savoir plus</strong></Link></p>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="./carousel3(1).jpg" className="d-block w-100"/>
                                <div className="carousel-caption d-none d-md-block mb-4">
                                    <h5 className="fs-4">Venue des classes de maternelle</h5>
                                    <p className="fs-6">Les enfants ont pu profiter d'un atelier lecture et d'un goûter bien mérité !</p>
                                </div>
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>

                    <div id="divAgenda">
                        <div id="divAgendaTitle">
                            <h1>Agenda</h1>
                        </div>

                        <div id="divAgendaContent">
                            <div id="divAgendaLine"></div>
                            <ul>
                                <li><strong>23 Décembre 2023</strong><br/>Goûter de Noël pour les primaires</li>
                                <li><strong>5 janvier 2024</strong><br/>Ré-ouverture de la bibliothèque</li>
                                <li><strong>14 Février 2024</strong><br/>Évènement : À vos romances !</li>
                                <li><strong>20 Février 2024</strong><br/>Séance de dédicaces : Jean-Paul Dubois</li>
                            </ul>
                        </div>
                    </div>

                    <div id="divTriple">
                        <Link to={"/"}><div id="divHoraire"></div></Link>
                        <Link to={"/register"}><div id="divInscription"></div></Link>
                        <Link to={"/"}><div id="divReserver"></div></Link>
                    </div>

                    <div id="divConcours">
                        <h1>Concours</h1>
                        <strong className="mb-3">Du 15 au 20 Décembre</strong>
                        <hr/>
                        <span className="mt-3 mb-4">Votez pour votre livre favori et gagnez un abonnement au magazine Lire !</span>
                        <button type="button" className="btn btn-outline-light"><strong>Participer au concours</strong></button>
                    </div>

                    <div id="divLatest">
                        <h1>Derniers ajouts</h1>
                    </div>
                </div>

            </div>
        </>
    )
}