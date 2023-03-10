import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { NavLink } from 'react-router-dom';

import style       from './Home.module.css';

function Home() {

    return (
        < MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} >
            < MouseParallaxChild factorX={0.1} factorY={0.1} >
                <div className={style.home}>
                    <div className={style.links}>
                        <NavLink to='/books'    >Books</NavLink>
                        <NavLink to='/movies'   >Movies</NavLink>
                        <NavLink to='/character'>Character</NavLink>
                    </div>
                </div>
            </ MouseParallaxChild >
        </ MouseParallaxContainer >
    )
}

export default Home;