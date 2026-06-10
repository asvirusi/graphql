import React from 'react';
import { CHARS_QUERY, Data } from '../utils/query';
import { useQuery } from '@apollo/client';
import { FlexContainer, Name, StyledBackground, StyledButton, StyledHeartFilled, Title } from '../components/Card.styles';
import { Container } from '../components/Card.styles';
import { FavCharImage } from './styles';

export function Favorites() {
  const { data, loading, error } = useQuery<Data>(CHARS_QUERY);
  const [removed, setRemoved] = React.useState<{ id: number; favorite: boolean }[]>([]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  const favorites = localStorage.getItem("favoriteCharacters")
  const items: [] = favorites ? JSON.parse(favorites) : null;
  return (
    <StyledBackground>
      <Title>Favorites</Title>
      <Container>
      {items && items.length > 0 ? (
        items.map((item: { id: number; favorite: boolean }) => {
          const char = data?.characters.results.find((char) => char.id === item.id);
          return char ? (
            <FlexContainer key={char.id}>
              <FavCharImage 
                src={char.image} alt={char.name} />
              <Name>{char.name}</Name>
              <StyledButton
                onClick={() => {
                  const removed = items.filter((fav: { id: number; favorite: boolean }) => fav.id !== char.id);
                  localStorage.setItem('favoriteCharacters', JSON.stringify(removed));
                  setRemoved(removed);
                }}
              >
                <StyledHeartFilled />
              </StyledButton>
            </FlexContainer>
          ) : null;
        })
      ) : (
        <Name>No favorites added</Name>
      )}
      </Container>
    </StyledBackground>
  );
}
export default Favorites;
