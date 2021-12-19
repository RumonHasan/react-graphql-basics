import React from 'react';
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

export const useCharacter = () => {
    const {error, data, loading} = useQuery(GET_CHARACTERS);

    return {
        error,
        data,
        loading
    }
}
