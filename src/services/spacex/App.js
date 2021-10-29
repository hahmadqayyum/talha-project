import React from 'react'
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import LaunchPage from "./Components/Launch/LaunchPage";
import LaunchInfoPage from "./Components/LaunchInfo/LaunchInfoPage";
import MainNav from "./Components/MainNav/MainNav";
import RocketInfoPage from "./Components/RocketInfo/RocketInfoPage";
import RocketPage from "./Components/Rockets/RocketPage";
import ShipInfoPage from "./Components/ShipInfo/ShipInfoPage";
import ShipsPage from "./Components/Ships/ShipsPage";
import TopNav from "./Components/TopNav/TopNav";

function App() {
  return ( 
    <div className="App">
      <TopNav />
      <MainNav />
      <Route exact path="/spacex" component={Home} />
      <Route path="/spacex/launches" component={LaunchPage}>
        
      </Route>
      <Route path="/spacex/launch/:flight_number" component={LaunchInfoPage} />
      <Route path="/spacex/rockets" component={RocketPage} />
      <Route path="/spacex/rocket/:id" component={RocketInfoPage} />
      <Route path="/spacex/ships" component={ShipsPage} />
      <Route path="/spacex/ship/:id" component={ShipInfoPage} />
    </div>
  );
}

export default App;
