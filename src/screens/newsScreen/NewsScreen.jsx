import "./NewsScreen.css"

export function NewsScreen () {
    return (
        <div id="newsContainer">
            <div id="newsSubContainer">

                <div id="news-element" style={{"backgroundImage": 'url("./news1.jpg")'}}>
                    <div id="news-header">
                        <span>Évènement</span>
                    </div>
                    <div id="news-title">
                        <div >
                            <span>Nouvel espace lecture</span>
                        </div>
                    </div>
                </div>

                <div id="news-element" style={{"backgroundImage": 'url("./news7.jpg")'}}>
                    <div id="news-header">
                        <span>Évènement</span>
                    </div>
                    <div id="news-title">
                        <div>
                            <span>Grève mercredi 27 Décembre</span>
                        </div>
                    </div>
                </div>

                <div id="news-element" style={{"backgroundImage": 'url("./news3.jpg")'}}>
                    <div id="news-header">
                        <span>Évènement</span>
                    </div>
                    <div id="news-title">
                        <div>
                            <span>Rénovation du batiment terminée</span>
                        </div>
                    </div>
                </div>

                <div id="news-element" style={{"backgroundImage": 'url("./news4.jpg")'}}>
                    <div id="news-header">
                        <span>Évènement</span>
                    </div>
                    <div id="news-title">
                        <div>
                            <span>Rencontrez Adrien votre nouveau bibliothècaire</span>
                        </div>
                    </div>
                </div>

                <div id="news-element" style={{"backgroundImage": 'url("./news5.jpg")'}}>
                    <div id="news-header">
                        <span>Évènement</span>
                    </div>
                    <div id="news-title">
                        <div>
                            <span>Nouveaux arrivages</span>
                        </div>
                    </div>
                </div>

                <div id="news-element" style={{"backgroundImage": 'url("./news6.jpg")'}}>
                    <div id="news-header">
                        <span>Évènement</span>
                    </div>
                    <div id="news-title">
                        <div>
                            <span>Votre avis compte !</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}