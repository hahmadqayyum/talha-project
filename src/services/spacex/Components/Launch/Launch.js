import React from 'react'
import { Link } from 'react-router-dom'
// import { LaunchesQuery } from '../../generated/graphql'
import Failure from '../Utils/Failure/Failure'
import Footer from '../Utils/Footer/Footer'
import Success from '../Utils/Success/Success'
import Upcoming from '../Utils/Upcoming/Upcoming'
import './Launch.css'
import { Fade } from 'react-reveal'

const Launch = ({ data }) => {


    return (
        <div className="launches">
            <div className="launch-heading-section">
                <h1 className="main-heading">SpaceX Launches</h1>
                <p className="main-para">See the launches that describe SpaceX's journey to the great beyond</p>
            </div>

            <div className="launch-deck">

                {!!data.launches && data.launches.map(
                    (launch, i) => !!launch &&
                        (
                            <Fade key={i} >
                                <div className="launch-card">
                                    <h2 className="launch-name">{launch.mission_name}</h2>
                                    <p className="launch-year">{launch.launch_year}</p>
                                    <p className="launch-success" >{launch.launch_success ? <Success /> : (launch.launch_success === false ? <Failure /> : <Upcoming />)}</p>
                                    <Link to={`/spacex/launch/${launch.flight_number}`} ><button className="viewmore-btn" >View More</button></Link>
                                </div>
                            </Fade>
                        )
                )}
            </div>

            <Footer />

        </div>
    )
}

export default Launch
