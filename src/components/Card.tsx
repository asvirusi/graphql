import React from 'react'
import {useQuery} from "@apollo/client"
import {Container, StyledBackground, FlexContainer, Name, CharImage, Title, Input} from "./Card.styles"
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
  const [search, setSearch] = React.useState('');
  
  const filteredResult = React.useMemo(() => 
    data 
    ? 
    data?.characters.results.filter((char) => 
      char.name.toLowerCase().includes(search.toLowerCase()) || char.id === search) 
    : [], 
    [search, data]);
    
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  // console.log("data", data?.characters.results);

  return (
    <StyledBackground>
        <Title>Characters and images</Title>
        <Input 
          type="text" 
          placeholder="Search by name or ID" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}/>
        <Container>
      {filteredResult?.map((char, i) => (
        
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
