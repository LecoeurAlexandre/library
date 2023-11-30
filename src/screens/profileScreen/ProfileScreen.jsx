import "./ProfileScreen.css"

export function ProfileScreen() {
    return (
        <div id="profileContainer">
            <div id="profileSubContainer">
                <img src="./profilePageLogo.svg"/>
                
                <div id="divProfileButtons">
                    <button type="button" class="btn btn-danger">Supprimer le profil</button>
                    <button type="button" class="btn btn-warning ms-3 my-5">Modifier le profil</button>
                </div>

                <div id="divProfileInfo">
                    <ul>
                        <li>Prénom :</li>
                        <li>Nom :</li>
                        <li>Date de naissance : </li>
                        <li>Email :</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


