import { Link } from 'react-router-dom';
import style from './CharacterList.module.css';

function CharacterList({ characters }) {

    return (
        <ul className={style.list}>
            {characters &&
                characters.docs.map(character => {
                    return (
                        <Link to={`/character/${character._id}`} key={character._id}>
                            <li> {character.name}</li>
                        </Link>
                    )
                })
            }
        </ul>
    )
}

export default CharacterList;