import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 3fr));
  justify-items: center;
  margin: 5rem`

export const Title= styled.h1`
  text-align: center;
  font-family: Fantasy;
  color: #606060;
  font-size: 300%;`
  
export const Name=styled.p`
  font-size: 150%;
  text-align: center;`

export const StyledBackground = styled.div`
  background-color: #FFFF8F;` 

export const FlexContainer = styled.div`
  displlay: flex;
  background-color: #87A96B;`

export const CharImage= styled.img`
  height: auto;`