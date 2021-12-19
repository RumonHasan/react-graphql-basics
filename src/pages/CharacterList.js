import React from 'react';
import "./character.css";
// query for characters
import { useQuery, gql } from '@apollo/client'; // in order to query data

const GET_CHARACTERS = gql`
    query{
        characters {
        results{
            id
            name
            image
        }
        }
    }
`

const CharacterList = () => {
    const {error, data, loading} = useQuery(GET_CHARACTERS);
    console.log({error, data, loading});

    if(loading) return <div>Spinner...</div>

    if(error) return <div>Something went wrong with data fetching</div>

    return (
        <div className='char-list'>
            {data.characters.results.map((character)=>{
                return (
                    <div>
                        <img src={character.image} alt={character.image}/>
                        <h2>{character.name}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default CharacterList;
