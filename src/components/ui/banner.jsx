import React, { Component } from 'react';
export default class BannerComponent extends Component {

    render() {
        return (

            <div class="section page header_section">
            <div class="gradient gradient_red_blue gradient_header_section"></div>
              <div class="section_container header_section_container flex_container flex_header_container">
                <div class="text header_text">
                  <h1>TourLanka</h1>
                </div>
                <div class="text body_text flex_item flex_header_item">
                  <h2 class="header_quote">Create Your Own Tour Package and Enjoy Your Vacation in Sri Lanka</h2>
                </div>
              </div>
            </div>

        );
    }

}