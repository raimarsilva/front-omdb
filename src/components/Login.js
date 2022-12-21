import { useState } from "react";
import api from '../services/api'

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('')

    const endPoint = 'auth/signin';

    function handleEmailChange(event){
        setEmail(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    async function doLogin(e){
        e.preventDefault()
        await api.post(endPoint,{email:email,password:password})
        .then((response) => {
            setToken(response.data.user.token)
        })
        setEmail('')
        setPassword('')
    }

    return(
        <div>
            <div>
                <h1>Login</h1>
            </div>
            <form>
                <label>E-mail:
                <input
                    placeholder="e-mail"
                    value={email}
                    onChange={handleEmailChange}/></label><br/>
                <label>Senha:
                <input
                    placeholder="senha"
                    value={password}
                    onChange={handlePasswordChange}/></label><br/>
                <button onClick={doLogin}>Acessar</button>
            </form>
        </div>
    )
}