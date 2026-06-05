import React from 'react'
import {useQuery, gql} from "@apollo/client"
import styled from 'styled-components'

const Container = styled.div`
display: grid;
align-items: center;
grid-gap: 5rem;
grid-template-columns: repeat(auto-fit, minmax(240px, 3fr));
justify-items: center;
margin: 5rem`

const Title= styled.h1`
text-align: center;
font-family: Fantasy;
color: #606060;
font-size: 300%;
`
const Name=styled.p`
font-size: 150%;
text-align: center;`

const StyledBackground = styled.body`
background-color: #FFFF8F;` 

const FlexContainer = styled.div`
displlay: flex;
background-color: #87A96B;
`
const Paragraph= styled.img`
`

const CHAR_QUERY = gql `
  query Query {
    characters {
      results {
        name
        image
      }
    }
  }`

function Card() {
  const { data, loading, error} =useQuery(CHAR_QUERY);

  if (loading) return "Loading...";
  if (error) return "Error..."
  return (
    <StyledBackground>
        <Title>Characters and images</Title>
        <Container>
          {data.characters.results.map((char) => (
          <FlexContainer>
        
            <Paragraph
              src={char.image} alt={char.name}>
            </Paragraph>

            <Name key={char.name}>{char.name}</Name>

        </FlexContainer>
      )
    )}

        </Container>
    </StyledBackground>
  );
}

export default Card;

// ?typescript add to 
// media queries with min max width