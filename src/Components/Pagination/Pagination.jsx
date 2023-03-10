import style from './Pagination.module.css';

function Pagination({ characters, setPagesNamber }) {

    return (
        <div className={style.paginations}>
            {characters &&
                (<>
                    {characters.page - 1 !== 0 &&
                        <button
                            disabled={characters.page - 1 === 0}
                            onClick={() => setPagesNamber(characters.page - 1)}
                        >{characters.page - 1}</button>
                    }

                    <button
                        className={style.active}
                        onClick={() => setPagesNamber(characters.page)}
                    >{characters.page}</button>

                    {characters.page !== characters.pages &&
                        <button
                            disabled={characters.page === characters.pages}
                            onClick={() => setPagesNamber(characters.page + 1)}
                        >{characters.page + 1}</button>
                    }
                </>)
            }
        </div>
    )
}

export default Pagination;