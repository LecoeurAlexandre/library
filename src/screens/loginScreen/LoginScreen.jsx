import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { handleForm } from './LoginScreenHttpHandle'
import {signIn} from "../../authSlice"
import "./LoginScreen.css"

export function LoginScreen () {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const test = (e) => {
        e.preventDefault();

        var credentials = { email: email, password: password };

        const onSigningHandler = async (credentials) => {
            dispatch(signIn(credentials)) 
        }

        onSigningHandler(credentials)

        navigate("/")
    }

    return (
        <div className='container'>
            <br /> <br />
            <div className='row justify-content-center mt-5'>
                <div className='col-md-8 mt-5'>
                    <div className='card margin-card mt-5 mb-5' id='loginScreen-shadow'>
                        <div className='card-body'>
                            <div className='row'>
                            <div className="col-lg-4">
                            <img className="img-fluid" src="../../public/loginImage.jpg"></img>
                        </div>
                        <div className="col-lg-8">
                            <div className='card-header text-center'>
                                <h2> S'identifier </h2>
                            </div>

                            <div className='card-body'>
                                <form className="needs-validation" id="loginForm" noValidate>

                                    <div className='row mb-3'>
                                        <label className='col-md-3 control-label'> Email</label>
                                        <div className='col-md-9'>
                                            <input
                                                type='email'
                                                name='username'
                                                className='form-control'
                                                placeholder='Entrer votre email'
                                                id="emailInput"
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
                                                id="passwordInput"
                                                value={password}
                                                onChange={ (e) => setPassword(e.target.value)}
                                                required
                                            >
                                            </input>
                                        </div>
                                        <div className="valid-feedback"> Please provide a valid zip. </div>
                                    </div>

                                    <div className='form-group mb-3'>
                                        <button className='btn btn-success btn-lg btn-block block-center col-lg-12' onClick={ (e) => test(e)} type="submit">Continuer</button>
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