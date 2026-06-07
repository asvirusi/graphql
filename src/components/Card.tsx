import React from 'react'
import {useQuery} from "@apollo/client"
import {Container, StyledBackground, FlexContainer, Name, CharImage, Title} from "./Card.style"
import { CHAR_QUERY } from '../utils/query';

interface Data {
  characters: Characters;
}

interface Characters {
    results: Character[];
}

interface Character {
  name: string;
  image: string;
  id: string;
}

function Card() {
  const { data, loading, error } = useQuery<Data>(CHAR_QUERY);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  // console.log(data.characters.results);
  return (
    <StyledBackground>
        <Title>Characters and images</Title>
        <Container>
          { data?.characters.results.map((char, i) => (
          <FlexContainer key={char.id ?? `${char.name}-${i}`}>
        
            <CharImage
              src={char.image} alt={char.name}>
            </CharImage>

            <Name>{char.name}</Name>

        </FlexContainer>
      )
    )}
        </Container>
    </StyledBackground>
  );
}

export default Card;
