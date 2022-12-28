import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../services/api'

export default function Register() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const endPoint = 'auth/signup';

    const navigate = useNavigate();

    function handleEmailChange(event) {
        setEmail(event.target.value)
    }

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function cleanForm() {
        setEmail('')
        setName('')
        setPassword('')
    }

    async function createUser(e) {
        e.preventDefault()
        await api.post(endPoint, { email: email, name: name, password: password })
            .then((response) => {
                console.log(response.status);
                navigate('/');
            })
        cleanForm();
    }

    return (
        <div>
            <div className="App-header">
                <h1>Cadastre-se</h1>
            </div>
            <form>
                <label>E-mail:
                    <input
                        class='form-control'
                        type='text'
                        placeholder="e-mail"
                        value={email}
                        onChange={handleEmailChange} /></label><br />
                <label>Nome:
                    <input
                        class='form-control'
                        placeholder="nome"
                        value={name}
                        onChange={handleNameChange} /></label><br />
                <label>Senha:
                    <input
                        class='form-control'
                        type='password'
                        placeholder="senha"
                        value={password}
                        onChange={handlePasswordChange} /></label><br />
                <button class='btn btn-outline-primary' onClick={() => navigate('/')}>Cancelar</button>
                <button class='btn btn-primary' onClick={createUser}>Salvar</button>
            </form>
        </div>
    )
}