import React from 'react'
import {useQuery} from "@apollo/client"
import {Container, StyledBackground, FlexContainer, Name, CharImage, Title, Input } from "./Card.styles"
import { CHARS_QUERY, Data } from '../utils/query';
import { StyledLink } from '../pages/styles';

function Card() {
  const { data, loading, error } = useQuery<Data>(CHARS_QUERY);
  const [search, setSearch] = React.useState('');
  
  const filteredResult = React.useMemo(() => 
    data 
    ? 
    data?.characters.results.filter((char) => 
      char.name.toLowerCase().includes(search.toLowerCase()) || char.id.toString() === search) 
    : [], 
    [search, data]);
    
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  // console.log("data", data?.characters.results);
//  function handleFavorites(id: string) {console.log("favorite", favorite);}
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

            <StyledLink to={`/character/${char.id}`}>
              <CharImage
                src={char.image}
                alt={char.name}
              />
              <Name>{char.name}</Name>
            </StyledLink>
          </FlexContainer>
   
      )
    )}
        </Container>
    </StyledBackground>
  );
}

export default Card;
