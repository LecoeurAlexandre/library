import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './RegisterScreen.css'

export function RegisterScreen () {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    return (
        <div className='container'>
            <br /> <br />
            <div className='row justify-content-center mt-5'>
                <div className='col-md-11'>
                    <div className='card margin-card mt-5 mb-5 test' id='loginScreen-shadow'>
                        <div className='card-body'>
                            <div className='row'>
                            <div className="col-lg-4">
                            <img className="img-fluid" src="../public/reader-book.jpg"></img>
                        </div>
                        <div className="col-lg-8">
                            <div className='card-header text-center'>
                                <h2> Créer un compte </h2>
                            </div>

                            <div className='card-body'>
                                <form class="needs-validation" novalidate>

                                    <div className='row mb-3'>
                                        <label className='col-md-3 control-label'> Prénom </label>
                                        <div className='col-md-9'>
                                            <input
                                                type='text'
                                                name='firstname'
                                                className='form-control'
                                                placeholder='Entrer votre prénom'
                                                value={firstname}
                                                onChange={ (e) => setFirstname(e.target.value)}
                                                required
                                            >
                                            </input>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <label className='col-md-3 control-label'> Nom </label>
                                        <div className='col-md-9'>
                                            <input
                                                type='text'
                                                name='lastname'
                                                className='form-control'
                                                placeholder='Entrer votre nom'
                                                value={lastname}
                                                onChange={ (e) => setLastname(e.target.value)}
                                                required
                                            >
                                            </input>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <label className='col-md-3 control-label'> Date de naissance </label>
                                        <div className='col-md-9'>
                                            <input
                                                type='date'
                                                name='birthdate'
                                                className='form-control'
                                                placeholder='Entrer votre nom'
                                                value={birthdate}
                                                onChange={ (e) => setBirthdate(e.target.value)}
                                            >
                                            </input>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <label className='col-md-3 control-label'> Email</label>
                                        <div className='col-md-9'>
                                            <input
                                                type='email'
                                                name='email'
                                                className='form-control'
                                                placeholder='Entrer votre email'
                                                value={email}
                                                onChange={ (e) => setEmail(e.target.value)}
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
                                        <button className='btn btn-success btn-lg btn-block block-center col-lg-12' onClick={ (e) => handleRegisterForm(e)}>Inscription</button>
                                    </div>
                                    <div>
                                        <Link to="/login">Déjà un compte ? Cliquez ici pour vous connecter</Link>
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