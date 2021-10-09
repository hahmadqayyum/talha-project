import React from 'react'
import { Button } from '@material-ui/core'
import './Home.css'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'

const Home = () => {



    return (
        <div>
            <img className="spacex-img" src="https://www.teslarati.com/wp-content/uploads/2019/06/Starlink-coverage-Earth-SpaceX-2-crop.jpg" alt="spacex-img" />
            <div className="second-div">
                <Fade bottom ><Button variant="contained" className="btn">See The Launch</Button> </Fade>
            </div>
            <div className="card-deck">
                <Fade bottom >
                    <div className="card">
                        <img src="https://hips.hearstapps.com/pop.h-cdn.co/assets/17/30/1501012342-pmx090117-falconheavy01.jpg?crop=1.00xw:0.492xh;0,0.209xh&resize=480:*" className="card-img" alt="card-img" />
                        <div className="card-detail">
                            <h1 className="card-heading" style={{ color: "black" }} >Launches</h1>
                            <p className="card-para" style={{ color: "black" }}>See all of SpaceX's launches into space</p>
                            <Button variant="contained" className="link-btn"><Link to={`/spacex/launches`} >View</Link></Button>
                        </div>
                    </div>
                </Fade>

                <Fade bottom >

                    <div className="card">
                        <img src="https://hips.hearstapps.com/pop.h-cdn.co/assets/17/30/1501012342-pmx090117-falconheavy01.jpg?crop=1.00xw:0.492xh;0,0.209xh&resize=480:*" className="card-img" alt="card-img" />
                        <div className="card-detail">
                            <h1 className="card-heading" style={{ color: "black" }} >Rockets</h1>
                            <p className="card-para" style={{ color: "black" }} >View all rockets that SpaceX uses</p>
                            <Button variant="contained" className="link-btn"><Link to={`/spacex/rockets`} >View</Link></Button>
                        </div>
                    </div>
                </Fade>

                <Fade bottom >
                    <div className="card">
                        <img src="https://cdn.vox-cdn.com/thumbor/PCABXCkc8mm7G63iLECRcQBmA-I=/0x0:3840x2560/1200x800/filters:focal(1613x973:2227x1587)/cdn.vox-cdn.com/uploads/chorus_image/image/62194005/GO_SEARCHER_HELO_LANDING_20181018_Helicopter_Landing_Test_2018_10_19_291_9_.0.jpg" className="card-img" alt="card-img" />
                        <div className="card-detail">
                            <h1 style={{ color: "black" }} className="card-heading">SpaceX Fleet</h1>
                            <p className="card-para" style={{ color: "black" }} >View all the boats and vehicles part of SpaceX Offshore Recovery System </p>
                            <Button variant="contained" className="link-btn"><Link to={`/spacex/ships`} >View</Link></Button>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="dragon-sim">
                <div className="heading-section" >
                    <h1 style={{ color: "black" }} className="dgs-heading">SpaceX Dragon 2 Simulator</h1>
                    <p className="dgs-para" style={{ color: "black" }} >Dock the SpaceX Dragon 2 Satellite to the International Space Station in this realtime simulator with the controls our astronauts use on their missions.</p>
                    <Button variant='outlined' className="dgs-btn"><a href="https://iss-sim.spacex.com/">Try Now</a></Button>
                </div>
            </div>

        </div>
    )
}

export default Home
