import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import api from "../services/api";
import User from "./User";

export default function Reviews() {
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);
    const endpoint = 'reviews/my';
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const [reviews, setReviews] = useState([]);

    useEffect(() => async function () {
        await api.get(endpoint, config)
            .then((resp) => {
                setReviews(resp.data.reviews);
                console.log('<Reviews> reviews: ', reviews)
            })
            .catch(err => { console.log(err) })
    }, []);

    async function removeReview(imdbID) {
        await api.delete('reviews/'.concat(imdbID), config)
            .then((resp) => {
                console.log(resp.data);
                navigate('/reviews');
            })
    }

    return (
        <>
            <div className="App-header">
                <h1>Reviews</h1>
                <User />
            </div>
            <div>
                <ul>
                    {reviews.length === 0 && 'Sem reviews.'}
                    {reviews.map((item) => {
                        return (
                            <div key={item.imdbID}>
                                <div style={{
                                    backgroundColor: '#ddd',
                                    borderColor: '#888',
                                    margin: '5px',
                                    padding: '5px'
                                }}>{item.comment}
                                    <Link onClick={() => removeReview(item.imdbID)}>Remover</Link>
                                </div>
                            </div>
                        )
                    })}
                </ul>
                <button
                    class='btn btn-primary'
                    onClick={() => navigate(-1)}>Voltar</button>
            </div>
        </>
    )
}