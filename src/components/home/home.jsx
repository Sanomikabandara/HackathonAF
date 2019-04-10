import React, { Component } from 'react';
import BannerComponent from '../ui/banner';
import TeamComponent from '../ui/team';
import OffersComponent from '../ui/offers';
import FooterComponent from '../ui/footer';

export default class HomeComponent extends Component {

    render() {
        return (
            <div className="main">
            <BannerComponent />

            <TeamComponent />
    
            <OffersComponent />
  
            </div>
        );
    }

}