import { useEffect, useState } from "react";

export default function ListMovies(){
    const [movies, setMovies] = useState('')

    useEffect(() => async function (){
        const res = await fetch(uri)
        const rjson = await res.json()
        setMovies(rjson.Title)
    },[]);

    const uri = 'https://www.omdbapi.com/?i=tt3896198&apikey=6793be4'

    
    
    return(
        <div>
            <h1>Filmes: {movies}</h1>
        </div>
    )
}