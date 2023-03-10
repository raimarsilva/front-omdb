import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import api from "../services/api";
import ListMovies from "./ListMovies";
import User from "./User";

export default function Home() {
    const { token, setUser } = useContext(AuthContext)

    const endPoint = 'auth/me';
    const config = { headers: { Authorization: `Bearer ${token}` } }

    useEffect(() => async function () {
        api.get(endPoint, config)
            .then((response) => {
                setUser({ name: response.data.name, email: response.data.email })
            })
    }, [])

    return (
        <>
            <div className="App-header">
                <h1>Home</h1>
                <Link
                    type='button'
                    class='btn btn-light'
                    to="/reviews"
                    title="ver suas revisões de filmes."
                >Reviews</Link>
                <User />
            </div>
            <div className="App">
                <ListMovies />
            </div>
        </>
    )
}