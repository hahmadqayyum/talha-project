import React from 'react'
import './MainNav.css'
import { Link } from 'react-router-dom'

const MainNav = () => {
    return (
        <div className="main-nav">
            <Link className="nav-link" to="/spacex" ><p>Home</p></Link>
            <Link className="nav-link" to="/spacex/launches"><p>Launches</p></Link>
            <Link className="nav-link" to="/spacex/rockets"><p>Rockets</p></Link>
            <Link className="nav-link" to="/spacex/ships"><p>Ships</p></Link>

        </div>
    )
}

export default MainNav
