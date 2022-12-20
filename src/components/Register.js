import { useState } from "react";
import api from '../services/api'

export default function Register(){
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const endPoint = 'auth/signup';

    function handleEmailChange(event){
        setEmail(event.target.value)
    }

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    async function createUser(){
        await api.post(endPoint,{email:email,name:name,password:password})
    }

    return(
        <div>
            <div>
                <h1>Cadastre-se</h1>
            </div>
            <form>
                <label>E-mail:
                <input
                    placeholder="e-mail"
                    value={email}
                    onChange={handleEmailChange}/></label><br/>
                <label>Nome:
                <input
                    placeholder="nome"
                    value={name}
                    onChange={handleNameChange}/></label><br/>
                <label>Senha:
                <input
                    placeholder="senha"
                    value={password}
                    onChange={handlePasswordChange}/></label><br/>
                <button onClick={createUser}>Salvar</button>
            </form>
        </div>
    )
}