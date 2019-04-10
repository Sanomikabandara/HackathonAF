import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './style.css';
import Users from './view-user/User';
import arrow from './images/arrow.svg';
import PaymentComponent from './components/payment';
import NavigationComponent from './components/ui/navigation';
import BannerComponent from './components/ui/banner';
import TeamComponent from './components/ui/team';
import OffersComponent from './components/ui/offers';
import FooterComponent from './components/ui/footer';
import HomeComponent from './components/home/home';
import LoginComponent from './components/login/login';
import PackageComponent from './components/packages/package';

class App extends Component {
  render() {
    return (
      
      <div>
        <a href="#top"><img class="arrow_image" src={arrow} /></a>
        <a name="top"></a>

        <NavigationComponent />


        <div id="map"></div>

        <FooterComponent />  
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBE-AatCnNmEzkMZL2Rmqu87zjmDqpU3vA&callback=initMap"></script>

        <script src="./script.js"></script>

        
      </div>
      
    );
  }
}

export default App;
