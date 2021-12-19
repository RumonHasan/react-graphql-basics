import { Box, Card, CardContent, Container, List, ListItem, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router';
import { useSingleCharacter } from '../hooks/useSingleCharacter';

const Character = () => {
    const {id} = useParams();
    const {data, loading, error} = useSingleCharacter(id);
    console.log({error, loading, data});

    // extras
    if(error) return <div>Something went wrong...</div>
    if(loading) return <div>loading...</div>

    return (
        <Box>
            <img src={data.character.image} width={400} height={400} alt={data.character.image}/>
            <Container>
                <Card>
                    <Box display='flex'>
                        <Container>
                            <Typography variant='h3'>{data.character.name}</Typography>
                            <Typography>{data.character.gender}</Typography>
                        </Container>
                        <Container>
                        <CardContent>
                            {data.character.episode.map((ep, index)=>{
                                return (
                                    <List key={index}>
                                        <ListItem>{ep.name}</ListItem>
                                        <ListItem>{ep.episode}</ListItem>
                                    </List>
                                )
                            })}
                        </CardContent>
                        </Container>
                    </Box>
                </Card>
            </Container>
        </Box>
    )
}
export default Character;
