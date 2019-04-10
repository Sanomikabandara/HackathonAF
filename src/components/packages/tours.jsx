import React, { Component } from 'react';
import BannerComponent from '../ui/banner';
import TeamComponent from '../ui/team';
import OffersComponent from '../ui/offers';
import FooterComponent from '../ui/footer';
import PackageComponent from './package';
import TourCategories from './tour-category';

export default class ToursComponent extends Component {

    render() {
        return (
            <div>
                <h1 align="center" color="#008000">TOUR CATEGORIES</h1>
                <div class="section_container second_section_container flex_container flex_center">
                    

                    <TourCategories
                                title="HIKING"
                                path="/tours/hiking"
                    />

                    <TourCategories
                                title="BEACHES AND WHALE WATCHING"
                                path="/tours/bww"
                    />

                    <TourCategories
                                title="RELIGIOUS AND HISTORICAL PLACES"
                                path="/tours/rhp"
                    />
                    
                    </div>
            </div>   
        );
    }

}