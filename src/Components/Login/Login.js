import React from 'react'
import FacebookAuth from '../FacebookAuth'
import logo from '../../logo.svg';

function Login() {
    return (
        <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="login-logo">REACT PLAYGROUND</h1>
                <FacebookAuth />
        </header>
    )
}

export default Login
