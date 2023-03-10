import style from './MovieInfo.module.css';

function MovieInfo({ movieId, movies }) {

    return (
        <>
            {movieId && (
                movies.map(movie => {
                    if (movie._id === movieId) {
                        return (
                            <ul key={movie._id} className={style.movieInfo}>
                                <li className={style.name}>{movie.name}</li>
                                <li className={style.elem}>Academy award nominations: {movie.academyAwardNominations}</li>
                                <li className={style.elem}>Academy award wins: {movie.academyAwardWins}</li>
                                <li className={style.elem}>Box office revenue in millions: {movie.boxOfficeRevenueInMillions}</li>
                                <li className={style.elem}>Budget in millions: {movie.budgetInMillions}</li>
                                <li className={style.elem}>Runtime in minutes: {movie.runtimeInMinutes}</li>
                            </ul>
                        )
                    }
                })
            )}
        </>
    )
}

export default MovieInfo;