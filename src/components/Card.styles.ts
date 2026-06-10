import { Heart } from "lucide-react";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  align-items: center;
  gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 3fr));
  justify-items: center;
  margin: 5rem;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: Fantasy;
  color: #606060;
  font-size: 300%;
`;

export const Name = styled.p`
  font-size: 120%;
  text-align: center;
`;

export const StyledBackground = styled.div`
  background-color: #ffff8f;
`;

export const FlexContainer = styled.div`
  background-color: #87a96b;
`;

export const CharImage = styled.img`
  height: auto;
  width: 100%;
  margin-left: -8px;
`;

export const Input = styled.input`
  display: block;
  margin: 0 auto;
  padding: 0.5rem;
  font-size: 1.5rem;
  width: 50%;
  margin-bottom: 2rem;
`;

export const StyledHeartFilled = styled(Heart)`
  fill: yellow;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  background-color: #87a96b;
  border: none;
`;

export const StyledHeart = styled(Heart)`
  fill: none;
  cursor: pointer;
`;
