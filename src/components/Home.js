import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import api from "../services/api";
import ListMovies from "./ListMovies";
import User from "./User";

export default function Home() {
    const { token, user, setUser } = useContext(AuthContext)

    const endPoint = 'auth/me';
    const config = { headers: { Authorization: `Bearer ${token}` } }

    useEffect(() => {
        api.get(endPoint, config)
            .then((response) => {
                setUser(response.data.name)
            })
    }, [config, setUser])

    return (
        <>
            <div className="App-header">
                <h1>Home</h1>
                <User />

            </div>
            <div className="App">
                <ListMovies />
            </div>
        </>
    )
}