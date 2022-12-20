const movies = fetch('https://www.omdbapi.com/?i=tt3896198&apikey=6793be4')

export default function getMovies(){
    return(
        <div>
            <h1>Filmes</h1>
        </div>
    )
}