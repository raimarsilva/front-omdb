import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import api from "../services/api";

export default function Favorites(props) {
    const { token } = useContext(AuthContext);
    const endpoint = 'favorites/';
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const [favorites, setFavorites] = useState([])

    useEffect(() => async function () {
        await api.get(endpoint, config)
            .then((resp) => {
                setFavorites(resp.data.favorites);
                console.log('<Favorites> lista de favoritos: ', favorites)
            })
            .catch((err) => { console.log(err) })
    }, []);

    async function unfavorite(imdbID) {
        await api.delete(endpoint.concat(imdbID), config)
            .then((resp) => {
                console.log(resp.data);
            })
        window.location.reload()
    }

    return (
        <div>
            <h1>Favoritos</h1>
            <ul>
                {favorites.length === 0 && 'Lista vazia.'}
                {favorites.map((item) => {
                    return (
                        <div key={item.imdbID}>
                            <div style={{
                                backgroundColor: '#ddd',
                                borderColor: '#888',
                                margin: '5px',
                                padding: '5px'
                            }}>{item.imdbID}
                                <button
                                    class='btn btn-danger btn-sm'
                                    onClick={() => unfavorite(item.imdbID)}>&#10006;</button>
                            </div>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}