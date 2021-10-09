import React from 'react'
import { useParams } from 'react-router-dom'
import LaunchContainerDetails from './index'

const LaunchInfoPage = () => {

    let { flight_number } =useParams();

    return (
        <div>
            {LaunchContainerDetails(flight_number)}
        </div>
    )
}

export default LaunchInfoPage
