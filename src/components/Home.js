import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import ListMovies from "./ListMovies";



export default function Home() {
    let token = useContext(AuthContext);

    return (
        <div className="App">
            <h1>Home</h1>
            token do storage: {localStorage.getItem('token')}
            <br />token do contexto: {token}
            <ListMovies />
        </div>
    )
}