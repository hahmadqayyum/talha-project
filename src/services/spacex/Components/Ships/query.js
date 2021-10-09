import gql from 'graphql-tag'


export const QUERY_SHIPS = gql`
query Ships{
    ships {
      active
      ship_id
      ship_name
      image
    }
  }
  
`