import style from './NotFound.module.css';

function NotFound() {

    return (
        <div className={style.notFound}>
            <div className={style.offer}></div>
            <h2>Error 404</h2>
        </div>
    )
}

export default NotFound;