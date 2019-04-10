import React, { Component } from 'react';
import PackageComponent from '../packages/package';
export default class TeamComponent extends Component {

    render() {
        return (

<div class="section page second_section">
        <a name="team"></a>
          <div class="section_container second_section_container flex_container flex_center">
            <div class="text header_text text_grad_purple_yellow">
              <h1>Our Team</h1>
            </div>
            
        <PackageComponent 
        image="feature1" 
        title="Alex Laz" 
        desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />


        <PackageComponent 
        image="feature1" 
        title="Selia Menn" 
        desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />


        <PackageComponent 
        image="feature1" 
        title="Selli Lox" 
        desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />


        <PackageComponent
        image="feature1" 
        title="Roll Perera" 
        desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />


          </div>
        </div>

        );
    }

}