import { useState, useEffect } from 'react';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { getResponseFetch } from '../../Functions';

import CharacterList from '../../Components/CharacterList/CharacterList';
import GoBack from '../../Components/GoBack/GoBack';
import Pagination from '../../Components/Pagination/Pagination';

import style from './Character.module.css';

function Character() {
    const [characters, setCharacters] = useState(null);
    const [pagesNumber, setPagesNamber] = useState(1);

    async function getFatch(url) {
        if (url) {
            const data = await getResponseFetch(url);
            setCharacters(data);
        }
        // Загрузка
    }

    useEffect(() => {
        getFatch(`https://the-one-api.dev/v2/character?page=${pagesNumber}&limit=21`)
    }, [pagesNumber]);

    let pages = [];

    if (characters) {
        for (let i = 1; i <= characters.pages; i++) {
            pages.push(i)
        }
    }

    return (
        < MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} >
            < MouseParallaxChild factorX={0.3} factorY={0.5} >
                <div className={style.character}>
                    <h2 className={style.title}>Characters</h2>
                    <GoBack color={'black'} />

                    <CharacterList characters={characters} />
                    <Pagination characters={characters} setPagesNamber={setPagesNamber} />
                </div>
            </ MouseParallaxChild >
        </ MouseParallaxContainer >
    )
}

export default Character;