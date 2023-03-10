import { useEffect, useState } from 'react';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { getResponseFetch } from '../../Functions';


import GoBack from '../../Components/GoBack/GoBack';
import MovieInfo from '../../Components/MovieInfo/MovieInfo';
import MovieList from '../../Components/MovieList/MovieList';
import style from './Movies.module.css';

function Movies() {
    const [movies, setMovies] = useState(null);
    const [movieId, setMovieId] = useState(null);

    async function getFatch(url) {
        if (url) {
            const data = await getResponseFetch(url);
            setMovies(data.docs);
        }
        // Загрузка
    }

    useEffect(() => {
        getFatch('https://the-one-api.dev/v2/movie')
    }, []);

    return (
        < MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} >
            < MouseParallaxChild factorX={0.3} factorY={0.3} >
                <div className={style.movies}>
                    <h2 className={style.title}>Lord of the Rings <br /> movies</h2>
                    <GoBack color={'white'} />

                    <div className={style.offer}>
                        <MovieList movies={movies} setMovieId={setMovieId} />
                        <MovieInfo movies={movies} movieId={movieId} />
                    </div>
                </div >
            </ MouseParallaxChild >

        </ MouseParallaxContainer >


    )
}

export default Movies;