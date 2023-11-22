import React, { useState } from 'react'
export function LoginScreen () {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='container'>
        <br /> <br />
        <div className='row justify-content-center'>
            <div className='col-md-8 offset-md-3'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                        <div className="col-lg-4">
                        <img className="img-fluid" src="https://static.vecteezy.com/ti/vecteur-libre/p3/2507570-lecteur-homme-livre-de-lecture-debout-avec-pile-livres-et-feuilles-gratuit-vectoriel.jpg"></img>
                    </div>
                    <div className="col-lg-8">
                    <div className='card-header'>
                        <h2 className='text-center'> Me connecter </h2>
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
                                <button className='btn btn-success btn-lg btn-block block-center col-lg-12' onClick={ (e) => handleLoginForm(e)}>Soumettre</button>
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