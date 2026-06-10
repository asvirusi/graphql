import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { CHAR_QUERY, Data } from '../utils/query';
import { CharImage, StyledDiv } from './styles';

function Character() {
  const { id } = useParams();
  const { data, loading, error } = useQuery<Data>(CHAR_QUERY);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

// console.log("data", data?.characters.results);
 const character = data ? 
  data?.characters.results.find((char) => char.id.toString() === id) : null;
console.log(character);
  return (
    <StyledDiv>
      <h1>Character ID: {id}</h1>
      <h2>Name: {character?.name}</h2>
      <CharImage src={character?.image} alt={character?.name} />
      <h3>Species: {character?.species || 'unknown'}</h3>
      <h3>Type: {character?.type || 'unknown'}</h3>
      <h3>Gender: {character?.gender || 'unknown'}</h3>
      <h3>Origin: {character?.origin.name || 'unknown'}</h3>
      <h3>Location: {character?.origin.name || 'unknown'}</h3>
    </StyledDiv>
  )
}

export default Character;
