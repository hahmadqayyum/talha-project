import React from 'react'
import { useParams } from 'react-router-dom'
import RocketInfoContainer from './index';

const RocketInfoPage = () => {

    let { id } = useParams();
    
    return (
        <div>
            {
                RocketInfoContainer(id)
            }
        </div>
    )
}

export default RocketInfoPage
