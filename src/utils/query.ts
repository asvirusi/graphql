import {gql} from "@apollo/client"

export const CHARS_QUERY = gql `
  query Query {
    characters {
      results {
        name
        image
        id
      }
    }
  }`
  
  export const CHAR_QUERY = gql `
  query Query {
    characters {
      results {
        name
        image
        id
        species
        type
        gender
        origin {name}
      }
        
    }
  }`

  export interface Data {
    characters: Characters;
  }
  
  export interface Characters {
      results: Character[];
  }
  
  export interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    Location: Location;
  }
  
  export interface Origin {
    name: string;
  }
  
  export interface Location {
    name: string;
  }