import React, { Component } from 'react';
import PackageComponent from '../packages/package';
export default class TeamComponent extends Component {

    render() {
        return (

<div class="section page second_section">
        <a name="team"></a>
          <div class="section_container second_section_container flex_container flex_center">
            <div class="text header_text text_grad_purple_yellow">
              <h1>TourLanka</h1>
            </div>
            
        <PackageComponent 
        image="feature1"
        title="Challenge and Win"
        desc="Complete the given challenges and win exciting prizes " />


        <PackageComponent 
        image="feature1" 
        title="Day as Sri Lankan"
        desc="Get to know the Sri Lankan culture by staying with a local Sri Lankan family for a day." />




          </div>
        </div>

        );
    }

}