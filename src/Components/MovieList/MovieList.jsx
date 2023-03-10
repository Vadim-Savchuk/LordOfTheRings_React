import style from './MovieList.module.css';

function MovieList({movies, setMovieId}) {

    return (
        <ul className={style.list}>
            {movies && (
                movies.map(movie => {
                    return (
                        <li key={movie._id} onClick={() => setMovieId(movie._id)}>
                            <h3>{movie.name}</h3>
                        </li>
                    )
                })
            )}
        </ul>
    )
}

export default MovieList;