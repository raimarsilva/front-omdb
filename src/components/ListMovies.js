import { Alert, Button } from "bootstrap";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import ReviewModal from "../modals/ReviewModal";
import api from "../services/api";
import Favorites from "./Favorites";

export default function ListMovies() {
    const { token } = useContext(AuthContext);
    const [movies, setMovies] = useState([]);
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const navigate = useNavigate();

    useEffect(() => async function () {
        const res = await fetch(uri)
        const rjson = await res.json()
        setMovies(rjson.Search)
    }, []);

    const uri = 'https://www.omdbapi.com/?s=eight&y=2022&apikey=6793be4'

    async function favorite(imdbID) {
        console.log(imdbID)
        await api.post('favorites', { imdbID }, config)
            .then(resp => {
                console.log(resp.data.msg);
                window.location.reload()
            })
            .catch(() => {
                alert('Filme já favoritado')
            })
    }

    function review(imdbID) {
        console.log(imdbID)
        //navigate('/reviews', imdbID)
        return (
            <div><h1>texto</h1></div>
        )
    }

    return (
        <div>
            <Favorites />
            <h1>Filmes disponíveis</h1>
            <div>
                <ul>
                    {movies.map((movie) => {
                        return (
                            <div key={movie.imdbID}>
                                <div style={{
                                    backgroundColor: '#ffffe6',
                                    borderColor: '#888',
                                    margin: '5px',
                                    padding: '5px',
                                    marginRight: '5px'
                                }}>{movie.Title}
                                    <button
                                        type='button'
                                        class='btn btn-warning active btn-sm'
                                        onClick={() => favorite(movie.imdbID)}>&#10084;</button>
                                    <button
                                        type='button'
                                        class='btn btn-primary btn-sm'
                                        data-toggle='modal'
                                        data-target='#myModal'
                                        onClick={() => review(movie.imdbID)}>Escrever análise</button>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}