import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { getResponseFetch } from '../../Functions';

import GoBack from '../../Components/GoBack/GoBack';

import style from './HeroPage.module.css';

function HeroPage() {
    const [herro, setHerro] = useState(null);
    const { id } = useParams();

    async function getFatch(url) {
        if (url) {
            const data = await getResponseFetch(url);
            setHerro(data.docs);
        }
        // Загрузка
    }

    useEffect(() => {
        getFatch(`https://the-one-api.dev/v2/character/${id}`)
    }, [id]);

    return (
        < MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} >
            < MouseParallaxChild factorX={0.3} factorY={0.5} >
                <div className={style.herro}>
                    <GoBack color={'white'} />

                    {herro &&
                        <ul className={style.info}>
                            <li className={style.name}>{herro[0].name ? herro[0].name : 'Unknown'}</li>
                            <li className={style.elem}>Gender: {herro[0].gender ? herro[0].gender : 'Unknown'}</li>
                            <li className={style.elem}>Race: {herro[0].race ? herro[0].race : 'Unknown'}</li>
                            <li className={style.elem}>Spouse: {herro[0].spouse ? herro[0].spouse : 'Unknown'}</li>
                            <li className={style.elem}>Height: {herro[0].height ? herro[0].height : 'Unknown'}</li>
                            <li className={style.elem}>Hair: {herro[0].hair ? herro[0].hair : 'Unknown'}</li>
                            <li className={style.elem}>Birth: {herro[0].birth ? herro[0].birth : 'Unknown'}</li>
                            <li className={style.elem}>Death: {herro[0].death ? herro[0].death : 'Unknown'}</li>

                            <li className={style.elem}>Wiki url:
                                <Link to={herro[0].wikiUrl} target="_blank">
                                    More information
                                </Link>
                            </li>
                        </ul>
                    }
                </div>
            </ MouseParallaxChild >
        </ MouseParallaxContainer >
    )
}

export default HeroPage;