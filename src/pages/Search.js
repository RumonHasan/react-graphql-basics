import { gql } from '@apollo/client';
import { Button, LinearProgress, List, ListItem } from '@material-ui/core';
import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';

const GET_CHAR_LOCATIONS = gql `
query GetCharacterLocations($name: String!){
    characters(filter:{
          name:$name
    })  {
      results{
          location{
            name
              }
        }
      }
  }
`

export const Search = () => {
    const [name, setName] = useState('');
    // first parameter is the function which is called later and returns and object with the data, error and loading states
    const [getCharacterLocations, {loading,error, data, called}] = useLazyQuery(GET_CHAR_LOCATIONS,{
        variables: {
            name
        }
    });

    console.log({data, called, loading, error});

    return (
        <div>
            <input value={name} onChange={(e)=>setName(e.target.value)}/>
            <Button onClick={()=>getCharacterLocations()} variant='contained'>Search</Button>
            {loading && <LinearProgress/>}
            {data && 
            <List>
                {data.characters.results.map((characters)=>{
                    return (
                        <ListItem>
                            {characters.location.name}
                        </ListItem>
                    )
                })}
            </List>}
        </div>
    )
}
