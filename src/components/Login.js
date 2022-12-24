import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../services/api';
import AuthContext from "../contexts/AuthContext";

export default function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let token = useContext(AuthContext);
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
                console.log('<Login> token a definir: ', response.data.user.token);
                token = response.data.user.token;
                localStorage.setItem('token', token);
                console.log('<Login> token definido: ', token);
                navigate('/home');
            }, (error) => {
                console.log(error)
            })
    }

    return (
        <>
            <div>
                <h1>Login</h1>
            </div>
            <form>
                <label>E-mail:
                    <input
                        placeholder="e-mail"
                        value={email}
                        onChange={handleEmailChange} /></label><br />
                <label>Senha:
                    <input
                        placeholder="senha"
                        value={password}
                        onChange={handlePasswordChange} /></label><br />
                <button onClick={doLogin}>Acessar</button>
            </form>
            <Link to='/register'>Cadastre-se</Link>
        </>
    )
}