import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../services/api';
import { AuthContext } from "../contexts/AuthContext";
import Values from "../strings/values";

export default function Login() {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

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
        <div>
            <div className="App-header">
                <h1>Login</h1>
            </div>
            <br />
            <div class='container align-items-center' style={{ width: '30%', minWidth: '300px' }}>
                <br />
                <form class='needs-validation' novalidate>
                    <label class='input-group-text' >E-mail:
                        <input
                            required
                            type='text'
                            class='form-control'
                            placeholder={Values.EMAIL_PLACEHOLDER}
                            value={email}
                            onChange={handleEmailChange} />
                    </label>
                    <br />
                    <label class='input-group-text'>Senha:
                        <input
                            required
                            type='password'
                            class='form-control'
                            placeholder={Values.PASSWORD_PLACEHOLDER}
                            value={password}
                            onChange={handlePasswordChange} />
                        <div class="invalid-feedback">Forneça uma senha aqui.</div>
                    </label>
                    <br />
                    <button
                        class='btn btn-primary'
                        type='submit'
                        onClick={doLogin}>Acessar</button>
                    <br />
                </form>
                <br />
                Primeiro acesso? <Link to='/register'>Cadastre-se!</Link>
            </div>
        </div >
    )
}