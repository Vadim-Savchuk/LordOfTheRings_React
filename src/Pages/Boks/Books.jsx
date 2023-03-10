import { useState, useEffect } from 'react';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { getResponseFetch } from '../../Functions';

import GoBack from '../../Components/GoBack/GoBack';

import style from './Books.module.css';

function Books() {
    const [books, setBooks] = useState(null);

    async function getFatch(url) {
        if (url) {
            const data = await getResponseFetch(url);
            setBooks(data.docs);
        }
        // Загрузка
    }

    useEffect(() => {
        getFatch('https:/the-one-api.dev/v2/book')
    }, []);

    return (
        < MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} >
            < MouseParallaxChild factorX={0.3} factorY={0.5} >
                <div className={style.books}>
                    <GoBack color={'black'} />
                    <div className="offer">
                        <h1 className={style.title}>Books <br /> The Lord of the Rings</h1>

                        <ul className={style.list}>
                            {books && (
                                books.map(book => {
                                    return <li key={book._id}><h4>{book.name}</h4></li>
                                })
                            )}
                        </ul>
                    </div>
                </div>
            </ MouseParallaxChild >
        </ MouseParallaxContainer >
    )
}

export default Books;