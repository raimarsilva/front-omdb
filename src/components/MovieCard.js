export default function MovieCard(movieset) {

    return (
        <div>
            <ul>
                {movieset?.map((movie) => {
                    return (
                        <li key={movie.imdbID}>{movie.Title}</li>
                    )
                })}
            </ul>
        </div>
    )
}