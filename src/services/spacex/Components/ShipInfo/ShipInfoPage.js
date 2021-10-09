import React from 'react'
import { useParams } from 'react-router-dom'
import ShipInfoContainer from './index'

const ShipInfoPage = () => {

    let { id } = useParams();

    return (
        <div>
            {
                ShipInfoContainer(id)
            }
        </div>
    )
}

export default ShipInfoPage
