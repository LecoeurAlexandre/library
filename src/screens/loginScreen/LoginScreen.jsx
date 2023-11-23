import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./LoginScreen.css"

export function LoginScreen () {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='container'>
            <br /> <br />
            <div className='row justify-content-center mt-5'>
                <div className='col-md-8 mt-5'>
                    <div className='card margin-card mt-5' id='loginScreen-shadow'>
                        <div className='card-body'>
                            <div className='row'>
                            <div className="col-lg-4">
                            <img className="img-fluid" src="https://static.vecteezy.com/ti/vecteur-libre/p3/2507570-lecteur-homme-livre-de-lecture-debout-avec-pile-livres-et-feuilles-gratuit-vectoriel.jpg"></img>
                        </div>
                        <div className="col-lg-8">
                            <div className='card-header text-center'>
                                <h2> S'identifier </h2>
                            </div>

                            <div className='card-body'>
                                <form class="needs-validation" novalidate>

                                    <div className='row mb-3'>
                                        <label className='col-md-3 control-label'> Email</label>
                                        <div className='col-md-9'>
                                            <input
                                                type='text'
                                                name='username'
                                                className='form-control'
                                                placeholder='Entrer votre email'
                                                value={username}
                                                onChange={ (e) => setUsername(e.target.value)}
                                                required
                                            >
                                            </input>
                                        </div>
                                    </div>

                                    <div className='row mb-3'>
                                        <label className='col-md-3 control-label'> Mot de passe </label>
                                        <div className='col-md-9'>
                                            <input
                                                type='password'
                                                name='password'
                                                className='form-control'
                                                placeholder='Entrer votre mot de passe'
                                                value={password}
                                                onChange={ (e) => setPassword(e.target.value)}
                                                required
                                            >
                                            </input>
                                        </div>
                                        <div class="valid-feedback"> Please provide a valid zip. </div>
                                    </div>

                                    <div className='form-group mb-3'>
                                        <button className='btn btn-success btn-lg btn-block block-center col-lg-12' onClick={ (e) => handleLoginForm(e)}>Continuer</button>
                                    </div>
                                    <div>
                                        <Link to="/register">Pas de compte ? Cliquez ici</Link>
                                    </div>
                                </form>

                            </div>
                        </div>
                            </div>
                        </div>
                        
                        

                    </div>
                </div>
            </div>
        </div>
        
    )
}