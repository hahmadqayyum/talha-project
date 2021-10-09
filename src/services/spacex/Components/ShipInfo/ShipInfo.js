import React from 'react'
// import { ShipInfoQuery } from '../../generated/graphql'
import Active from '../Utils/Active/Active'
import Footer from '../Utils/Footer/Footer'
import InActive from '../Utils/InActive/InActive'
import { Fade } from 'react-reveal';
import './ShipInfo.css'




const ShipInfo = ({ data }) => {
    return (
        <div className="ship-info">
            <Fade>
                <h1 className="ship-info-name" >{data.ship?.ship_name}</h1>
                <hr className="separate-line" />
                <p className="ship-info-status" >Ship Status: {data.ship?.active ? <Active /> : <InActive />}</p>
                <hr className="separate-line" />
                <p className="ship-info-class" >Ship Class: {data.ship?.class ? data.ship.class : "Not Assigned"}</p>
                <hr className="separate-line" />
                <p className="ship-info-year" >Year Built: {data.ship?.year_built}</p>
                <hr className="separate-line" />
                <p className="ship-info-speed" >Ship Speed:{data.ship?.speed_kn ? data.ship?.speed_kn : "Not Measured"}</p>
                <hr className="separate-line" />
                <p className="ship-info-type" >Ship Type: {data.ship?.ship_type}</p>
                <hr className="separate-line" />
                <p className="ship-info-number" >Ship Number: {data.ship?.imo ? data.ship?.imo : "Not Assigned"}</p>
                <hr className="separate-line" />
                <p className="ship-info-al" >Attempted Landings:{data.ship?.attempted_landings ? data.ship?.attempted_landings : "None"}</p>
                <hr className="separate-line" />
                <p className="ship-info-sl" >Successful Landings: {data.ship?.successful_landings ? data.ship?.successful_landings : "None"}</p>
                <hr className="separate-line" />
                <p className="ship-info-weight" >Ship Weight: {data.ship?.weight_kg ? data.ship?.weight_kg + "Kg" : "Not Measured"}</p>
                <hr className="separate-line" />
                <h1 className="gallery-heading" >Gallery:</h1>
                {
                    data.ship?.image ? <img className="ship-info-img" src={`${data.ship.image}`} alt="ship-img" /> : <p className="not-found" >No Images Found</p>
                }
            </Fade>
            <Footer />
        </div>
    )
}

export default ShipInfo
