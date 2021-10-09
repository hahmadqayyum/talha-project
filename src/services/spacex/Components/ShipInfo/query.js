import gql from 'graphql-tag'

export const SHIP_INFO_QUERY = gql`
query ShipInfo($id: String!){
    ship(id: $id) {
     active
     attempted_landings
     class
     ship_id
     imo
     ship_name
     speed_kn
     successful_landings
     ship_type
     year_built
     weight_kg
     image
   }
 }
`