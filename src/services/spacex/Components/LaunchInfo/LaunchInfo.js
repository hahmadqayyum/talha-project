import React from 'react'
// import { LaunchInfoQuery } from '../../generated/graphql'
import Success from '../Utils/Success/Success'
import Failure from '../Utils/Failure/Failure'
import Upcoming from '../Utils/Upcoming/Upcoming'
import './LaunchInfo.css'
import Footer from '../Utils/Footer/Footer'
import { Fade } from 'react-reveal'



const LaunchInfo = ({ data }) => {


    if (!data.launch) {
        return <div>No data available</div>
    }



    return (
        <div className="launch-info">
            <Fade>
                <h1 className="launchinfo-heading" >{data.launch.mission_name}</h1>
                <hr className="separate-line" />
                <p className="launchinfo-date" >Launch Date: {data.launch.launch_date_utc}</p>
                <hr className="separate-line" />
                <p className="launchinfo-success" >Launch Status: {data.launch.launch_success ? <Success /> : (data.launch.launch_success === false ? <Failure /> : <Upcoming />)}</p>
                <hr className="separate-line" />
                <p className="launchinfo-site" >Launch Site: {data.launch.launch_site?.site_name_long}</p>
                <hr className="separate-line" />
                <p className="launchinfo-year" >Launch Year: {data.launch.launch_year}</p>
                <hr className="separate-line" />
                <p className="launchinfo-rocket" >Rocket Used: {data.launch.rocket?.rocket_name}</p>
                <hr className="separate-line" />
                <h1 className="gallery-heading">Gallery:</h1>
                <div className="gallery">
                    {
                        data.launch.links?.flickr_images?.length !== 0 ? (<>
                            {
                                data.launch.links?.flickr_images?.map((image, i) => <img className="launch-images" key={i} src={`${image}`} alt="img" />)
                            }
                        </>) : <p className="not-found" >No Images Found</p>
                    }

                </div>
            </Fade>
            <Footer />
        </div>
    )
}

export default LaunchInfo


