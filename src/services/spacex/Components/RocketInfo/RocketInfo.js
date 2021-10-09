import React from 'react'
// import { RocketInfoQuery } from '../../generated/graphql'
import Active from '../Utils/Active/Active'
import Footer from '../Utils/Footer/Footer'
import InActive from '../Utils/InActive/InActive'
import './RocketInfo.css'
import { Fade } from 'react-reveal'



const RocketInfo = ({ data }) => {
    return (
        <div className="rocket-info" >
            <Fade>
                <h1 className="rocket_name" >Name: {data.rocket?.rocket_name}</h1>
                <hr className="separate-line" />
                <p className="rocket-manufacture" >Manufacturer: {data.rocket?.company}</p>
                <hr className="separate-line" />
                <p className="rocket-country" >Country: {data.rocket?.country}</p>
                <hr className="separate-line" />
                <p className="rocket-cost" >Cost: $ {data.rocket?.cost_per_launch}</p>
                <hr className="separate-line" />
                <p className="rocket-type" >Rocket Type: {data.rocket?.rocket_type}</p>
                <hr className="separate-line" />
                <p className="rocket-engine-type" >Rocket Engine: {data.rocket?.engines?.type}</p>
                <hr className="separate-line" />
                <p className="rocket-engine-version" >Engine Version: {data.rocket?.engines?.version}</p>
                <hr className="separate-line" />
                <p className="first-flight" >First Flight: {data.rocket?.first_flight}</p>
                <hr className="separate-line" />
                <p className="rocket-height" >Rocket Height: {data.rocket?.height?.meters} meters</p>
                <hr className="separate-line" />
                <p className="rocket-status" >Rocket Status: {data.rocket?.active === true ? <Active /> : <InActive />}</p>
                <hr className="separate-line" />
                <p className="rocket-description">Description:</p>
                <p className="rocket-description" >Description: {data.rocket?.description}</p>
                <hr className="separate-line" />
                <h1 className="gallery-heading" >Gallery</h1>
                {
                    data.rocket?.flickr_images?.length !== 0 ? (
                        <>
                            {
                                data.rocket?.flickr_images?.map((img, i) => (<img className="rocket-images" key={i} src={`${img}`} alt="img" />))
                            }
                        </>
                    ) : <p className="not-found" >No Images Found</p>
                }</Fade>
            <Footer />
        </div>
    )
}

export default RocketInfo
