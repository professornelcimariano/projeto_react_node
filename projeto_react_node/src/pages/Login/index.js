import React, { useState } from 'react';
import { api } from '../../config/configApi'

export const Login = () => {

    const [user, setUser] = useState({
        usr_login: '',
        usr_pass: ''
    });

    const valorInput = e => setUser({...user, [e.target.name]: e.target.value});
    const loginSubmit = async e => {
        e.preventDefault()
        // console.log(user.usr_login)

        const headers = {
            'Content-Type': 'application/json'
        }

        await api.post('/login', user, {headers})
        .then((response) => {
            console.log(response)
        }).catch((erro) => {
            console.log('erro')
        })

    }
    return (
        <div>
            <h2> Login </h2>
            <form onSubmit={loginSubmit}>
                <label> Login </label>
                <input type='text' name='usr_login' onChange={valorInput} />
                <label> Senha </label>
                <input type='password' name='usr_pass' onChange={valorInput} />
                <button type="submit"> Logar </button>
            </form>
        </div>
    )
}