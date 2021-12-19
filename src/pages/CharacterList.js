import React from 'react';
import "./character.css";
import { useCharacter } from '../hooks/useCharacter';
import { Link } from 'react-router-dom';

const CharacterList = () => {
    const {error, data, loading} = useCharacter();
    console.log({error, data, loading});

    if(loading) return <div>Spinner...</div>

    if(error) return <div>Something went wrong with data fetching</div>

    return (
        <div className='char-list'>
            {data.characters.results.map((character)=>{
                return (
                    <Link to={`/${character.id}`}>
                        <img src={character.image} alt={character.image}/>
                        <h2>{character.name}</h2>
                    </Link>
                )
            })}
        </div>
    )
}

export default CharacterList;
