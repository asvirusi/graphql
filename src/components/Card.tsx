import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import {
  Container,
  StyledBackground,
  FlexContainer,
  Name,
  CharImage,
  Title,
  Input,
  StyledButton,
  StyledHeart,
  StyledHeartFilled,
} from "./Card.styles";
import { CHAR_QUERY, Data } from "../utils/query";
import { StyledLink } from "../pages/styles";

function Card() {
  const { data, loading, error } = useQuery<Data>(CHAR_QUERY);
  const [search, setSearch] = React.useState("");
  const [favorite, setFavorite] = useState<{ id: number; favorite: boolean }[]>(
    localStorage.getItem("favoriteCharacters")
      ? JSON.parse(localStorage.getItem("favoriteCharacters") as string)
      : [],
  );
  useEffect(() => {
    localStorage.setItem("favoriteCharacters", JSON.stringify(favorite));
  }, [favorite]);
  const filteredResult = React.useMemo(
    () =>
      data
        ? data?.characters.results.filter(
            (char) =>
              char.name.toLowerCase().includes(search.toLowerCase()) ||
              char.id.toString() === search,
          )
        : [],
    [search, data],
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  function handleFavorite(id: number) {
    setFavorite((prev) =>
      prev.includes(
        favorite.find((fav) => fav.id === id) as {
          id: number;
          favorite: boolean;
        },
      )
        ? prev.filter((favId) => favId.id !== id)
        : [...prev, { id: id, favorite: true }],
    );
  }

  return (
    <StyledBackground>
      <Title data-cy="title">Characters and images</Title>
      <Input
        type="text"
        placeholder="Search by name or ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container>
        {filteredResult?.map((char, i) => (
          <FlexContainer key={char.id ?? `${char.name}-${i}`}>
            <StyledLink to={`/character/${char.id}`}>
              <CharImage 
                src={char.image} 
                alt={char.name} />
              <Name>{char.name}</Name>
            </StyledLink>
            {favorite.some((fav) => fav.id === char.id) ? (
              <StyledButton 
                onClick={() => handleFavorite(char.id)}
                type="button"
              >
                <StyledHeartFilled />
              </StyledButton>
            ) : (
              <StyledButton 
                onClick={() => handleFavorite(char.id)}
                type="button"
              >
                <StyledHeart />
              </StyledButton>
            )}
          </FlexContainer>
        ))}
      </Container>
    </StyledBackground>
  );
}

export default Card;
