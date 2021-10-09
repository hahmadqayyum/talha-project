import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewsDashboard from './services/news/newsDashboard'
import MainPage from './mainPage';

import Home from './services/corona/Home'
import Stats from './services/corona/Stats'
import Map from './services/corona/Map'
import NavBar from './services/corona/NavBar';
import weatherMain from './services/weather/weatherMain';
import mainSpacex from './services/spacex/mainSpacex';
import mainHome from './home/Home';
import Footer from './services/spacex/Components/Utils/Footer/Footer';


function App() {


  return (
    <div className="App">
      <Router>
        <div>
          <MainPage />

          {/* <hr /> */}
          <Route path="/covid/*" component={NavBar} />
        </div>
        <Route exact path="/" component={mainHome} />
        <Route path="/news" component={NewsDashboard} />

        <Route path="/covid/Home" component={Home} />
        <Route path="/covid/Stats" component={Stats} />
        <Route path="/covid/Map" component={Map} />
        <Route path="/weather" component={weatherMain} />
        <Route path="/spacex" component={mainSpacex} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
