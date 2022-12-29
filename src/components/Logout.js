import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext";

export default function Logout() {
    const navigate = useNavigate();
    const { setToken } = useContext(AuthContext);

    function signout() {
        setToken('');
        localStorage.removeItem('token');
        navigate('/login');
    }
    return (
        <button
            type='button'
            class='btn btn-outline-light btn-sm'
            onClick={() => signout()}>
            <i class="fa fa-sign-out"></i>
            Encerrar</button>

    )
}