import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import BannerComponent from '../ui/banner';
import TeamComponent from '../ui/team';
import OffersComponent from '../ui/offers';
import FooterComponent from '../ui/footer';

import image1 from '../../images/surf01.jpg';
import './package.css';

export default class PackageComponent extends Component {


    constructor(props) {
        super(props);
        this.image = props.image;
        this.title = props.title;
        this.desc = props.desc;

        this.imagePath = "feature flex_feature_item " + this.image;
    }

    render() {
        return (
            <a href="#link1">
                <div class={this.imagePath}>
                    <div class="feature_image"></div>
                    <h2>{this.title}</h2>
                    <p>{this.desc}</p>
                </div>
            </a>
        );
    }

}