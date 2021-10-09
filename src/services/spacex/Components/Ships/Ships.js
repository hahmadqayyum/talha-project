import React from 'react'
import { Link } from 'react-router-dom'
// import { ShipsQuery } from '../../generated/graphql'
import Active from '../Utils/Active/Active'
import Footer from '../Utils/Footer/Footer'
import InActive from '../Utils/InActive/InActive'
import { Fade } from 'react-reveal'
import './Ships.css'



const Ships = ({ data }) => {
    return (
        <div className="ships" >

            <div className="ship-deck">

                {
                    !!data.ships && data.ships.map((ship, i) => (
                        <Fade key={i} >
                            <div className="ship-card">
                                {
                                    ship?.image ? (<img src={`${ship?.image}`} className="ship-img" alt="ship-img" />) : <img className="ship-img" src="https://www.spacex.com/static/images/share.jpg" alt="default-img" />
                                }

                                <h1 className="ship-heading" >{ship?.ship_name}</h1>
                                {
                                    ship?.active ? <Active /> : <InActive />
                                }
                                <p className="ship-status" >{ship?.active}</p>
                                <Link to={`/spacex/ship/${ship?.ship_id}`} ><button className="link-button" >View More</button></Link>
                            </div>
                        </Fade>
                    ))
                }

            </div>
            <Footer />
        </div>
    )
}

export default Ships
