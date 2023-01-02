import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import ReviewModal from "../modals/ReviewModal";
import api from "../services/api";
import Favorites from "./Favorites";

export default function ListMovies() {
    const { token } = useContext(AuthContext);
    const [movies, setMovies] = useState([]);
    const [movieReview, setMovieReview] = useState(null);
    const [favorite, setFavorite] = useState(null);
    const config = { headers: { Authorization: `Bearer ${token}` } };

    useEffect(() => async function () {
        const res = await fetch(uri)
        const rjson = await res.json()
        setMovies(rjson.Search)
    }, []);

    const uri = 'https://www.omdbapi.com/?s=eight&y=2022&apikey=6793be4'

    async function doFavorite(imdbID) {
        console.log(imdbID)
        await api.post('favorites', { imdbID }, config)
            .then(resp => {
                console.log(resp.data.msg);
                setFavorite(imdbID);
                updateFavorites();
            })
            .catch(() => {
                alert('Filme já favoritado')
            })
    }

    function reviewModal() {
        if (movieReview !== null)
            return <ReviewModal movieReview={movieReview} setMovieReview={setMovieReview} />
    }

    function updateFavorites(){
        if (favorite !== null) return <Favorites />;
    }

    return (
        <div>
            {reviewModal()}
            {updateFavorites()}
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
                                        onClick={() => doFavorite(movie.imdbID)}>&#10084;</button>
                                    <button
                                        type='button'
                                        class='btn btn-primary btn-sm'
                                        data-toggle='modal'
                                        data-target='#myModal'
                                        onClick={() => setMovieReview(movie.imdbID)}>Escrever análise</button>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}