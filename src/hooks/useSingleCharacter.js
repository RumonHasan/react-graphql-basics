import { gql, useQuery } from "@apollo/client";
import react from "react";

// getting a single character id in order to get the details
const GET_CHARACTER_ONE = gql`
    query GetCharacter($id: ID!){ 
        character(id:$id){
            name
            id
            image
            episode{
                name
                episode
            }
        }
    }
`

export const useSingleCharacter = (id)=>{
    // here the second paramter of the id query accepts options which accepts an id
    const {data, error, loading} = useQuery(GET_CHARACTER_ONE, {
        variables:{
            id
        }
    })
    return {
        data,
        error,
        loading
    }
}