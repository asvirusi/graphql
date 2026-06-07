import {gql} from "@apollo/client"

export const CHAR_QUERY = gql `
  query Query {
    characters {
      results {
        name
        image
        id
      }
    }
  }`
