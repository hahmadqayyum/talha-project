import gql from 'graphql-tag'

export const ROCKET_INFO_QUERY= gql `
query RocketInfo($id: String!){
    rocket(id: $id) {
      active
      company
      cost_per_launch
      country
      description
      flickr_images
      engines {
        type
        version
      }
      first_flight
      height {
        meters
      }
      rocket_name
      rocket_type
      rocket_id
    }
  }
  
`