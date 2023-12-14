import React from "react"
import './BooksListScreen.css'

export function BooksListScreen () {
    return (
        <div id='booklist-container'>
            {/* <h2 id='booklist-h2'>Tous les ouvrages</h2> */}
            <div id='booklist-cards-container'>
                <div id='booklist-card'>
                    <img id='booklist-card-img' src="./public\cloches-terre.jpg" alt="" />
                    <div id="div-vertical-line"></div>
                    <div id='booklist-card-info'>
                            <h3 id='booklist-card-title'>Les Cloches de la terre. Paysage sonore et culture sensible dans les campagnes au XIXe siècle</h3>
                            <div id='booklist-card-contents'>
                                <div className='booklist-card-content'>Corbin, Alain</div>
                                <div className='booklist-card-content'>544 pages</div>
                            </div>
                            <div id='booklist-card-description'>
                            En exploitant les quelques dix mille affaires de cloches que le XIXe siècle nous a laissées, Alain Corbin découvre à quel point ces sources insolites sont au centre de tout un ordre symbolique. La cloche préside au rythme de la vie rurale, oriente son espace.
                            </div>
                            <form id='booklist-button-container'>
                                <button className='booklist-button' id='booklist-booking-button' type='button'><img src="./plus-circle.svg" id="reserve-button"/>Réserver</button>
                            </form>
                    </div>
                </div>




                {/* <div id='booklist-card'>
                        <img id='booklist-card-img' src="./public\promesse_aube.jpg" alt="" />
                    <div id='booklist-card-info'>
                            <h3 id='booklist-card-title'>La promesse de l'Aube</h3>
                            <div id='booklist-card-contents'>
                                <div className='booklist-card-content'>Gary, Romain</div>
                                <div className='booklist-card-content booklist-card-content-right'>Gallimard</div>
                                <div className='booklist-card-content'>390 pages</div>
                                <div className='booklist-card-content booklist-card-content-right'>1973</div> 
                            </div>
                            <div id='booklist-card-description'>
                            « Avec l'amour maternel, la vie vous fait à l'aube une promesse qu'elle ne tient jamais ». Et c'est ainsi que Romain Gary explique le titre qu'il donne à son autobiographie, La Promesse de l'aube.
                            </div>
                            <form id='booklist-button-container'>
                                <button className='booklist-button' id='booklist-wish-button' type='submit'>Souhaiter</button>
                                <button className='booklist-button' id='booklist-booking-button' type='button'>Réserver</button>
                            </form>
                    </div>
                </div>
                <div id='booklist-card'>
                        <img id='booklist-card-img' src="./public\promesse_aube.jpg" alt="" />
                    <div id='booklist-card-info'>
                            <h3 id='booklist-card-title'>La promesse de l'Aube</h3>
                            <div id='booklist-card-contents'>
                                <div className='booklist-card-content'>Gary, Romain</div>
                                <div className='booklist-card-content booklist-card-content-right'>Gallimard</div>
                                <div className='booklist-card-content'>390 pages</div>
                                <div className='booklist-card-content booklist-card-content-right'>1973</div> 
                            </div>
                            <div id='booklist-card-description'>
                            « Avec l'amour maternel, la vie vous fait à l'aube une promesse qu'elle ne tient jamais ». Et c'est ainsi que Romain Gary explique le titre qu'il donne à son autobiographie, La Promesse de l'aube.
                            </div>
                            <form id='booklist-button-container'>
                                <button className='booklist-button' id='booklist-wish-button' type='submit'>Souhaiter</button>
                                <button className='booklist-button' id='booklist-booking-button' type='button'>Réserver</button>
                            </form>
                    </div>
                </div>
                <div id='booklist-card'>
                        <img id='booklist-card-img' src="./public\promesse_aube.jpg" alt="" />
                    <div id='booklist-card-info'>
                            <h3 id='booklist-card-title'>La promesse de l'Aube</h3>
                            <div id='booklist-card-contents'>
                                <div className='booklist-card-content'>Gary, Romain</div>
                                <div className='booklist-card-content booklist-card-content-right'>Gallimard</div>
                                <div className='booklist-card-content'>390 pages</div>
                                <div className='booklist-card-content booklist-card-content-right'>1973</div> 
                            </div>
                            <div id='booklist-card-description'>
                            « Avec l'amour maternel, la vie vous fait à l'aube une promesse qu'elle ne tient jamais ». Et c'est ainsi que Romain Gary explique le titre qu'il donne à son autobiographie, La Promesse de l'aube.
                            </div>
                            <form id='booklist-button-container'>
                                <button className='booklist-button' id='booklist-wish-button' type='submit'>Souhaiter</button>
                                <button className='booklist-button' id='booklist-booking-button' type='button'>Réserver</button>
                            </form>
                    </div>
                </div>
                <div id='booklist-card'>
                        <img id='booklist-card-img' src="./public\promesse_aube.jpg" alt="" />
                    <div id='booklist-card-info'>
                            <h3 id='booklist-card-title'>La promesse de l'Aube</h3>
                            <div id='booklist-card-contents'>
                                <div className='booklist-card-content'>Gary, Romain</div>
                                <div className='booklist-card-content booklist-card-content-right'>Gallimard</div>
                                <div className='booklist-card-content'>390 pages</div>
                                <div className='booklist-card-content booklist-card-content-right'>1973</div> 
                            </div>
                            <div id='booklist-card-description'>
                            « Avec l'amour maternel, la vie vous fait à l'aube une promesse qu'elle ne tient jamais ». Et c'est ainsi que Romain Gary explique le titre qu'il donne à son autobiographie, La Promesse de l'aube.
                            </div>
                            <form id='booklist-button-container'>
                                <button className='booklist-button' id='booklist-wish-button' type='submit'>Souhaiter</button>
                                <button className='booklist-button' id='booklist-booking-button' type='button'>Réserver</button>
                            </form>
                    </div>
                </div> */}
            </div>
                
        </div>

    )
}