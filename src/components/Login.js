import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../services/api';
import { AuthContext } from "../contexts/AuthContext";
import Values from "../strings/values";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setToken } = useContext(AuthContext);

    const navigate = useNavigate();

    const endPoint = 'auth/signin';

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    async function doLogin(e) {
        e.preventDefault();
        await api.post(endPoint, { email: email, password: password })
            .then((response) => {
                localStorage.setItem('token', response.data.user.token);
                setToken(localStorage.getItem('token'));
                navigate('/home');
            }, (error) => {
                console.log(error)
            })
    }

    return (
        <div class='col'>
            <div className="App-header">
                <h1>Login</h1>
            </div>
            <div class='needs-validation'>
                <span class='input-group-text' >E-mail:
                    <input
                        required
                        type='text'
                        class='form-control'
                        placeholder={Values.EMAIL_PLACEHOLDER}
                        value={email}
                        onChange={handleEmailChange} /></span><br />
                <span class='input-group-text'>Senha:
                    <input
                        required
                        type='password'
                        class='form-control'
                        placeholder={Values.PASSWORD_PLACEHOLDER}
                        value={password}
                        onChange={handlePasswordChange} /></span><br />
                <button class='btn btn-outline-primary' type='submit' onClick={doLogin}>Acessar</button>
            </div>
            <Link to='/register'>Cadastre-se</Link>
        </div >
    )
}