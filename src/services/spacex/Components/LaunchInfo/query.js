import gql from 'graphql-tag'

export const QUERY_LAUNCH_INFO = gql `
query LaunchInfo($id: String){
    launch(id: $id){
      mission_name
      launch_success
      launch_year
      flight_number
      launch_date_utc
      launch_site{
        site_name_long
      }
      rocket{
        rocket_name
        rocket_type
      }
      details
      links{
        video_link
        flickr_images
      }
    }
  }
`;