import React, { Component } from 'react';
import BannerComponent from '../ui/banner';
import TeamComponent from '../ui/team';
import OffersComponent from '../ui/offers';
import FooterComponent from '../ui/footer';
import PackageComponent from './package';

export default class HikingComponent extends Component {

    render() {
        return (
            <div>
                <h1 align="center" color="#008000">HIKING</h1>
                <div class="section_container second_section_container flex_container flex_center">
                    

                    <PackageComponent
                        title="ELLA"
                        image="feature1"
                        desc="Ella is a small town in the Badulla District of Uva Province,
                        Sri Lanka governed by an Urban Council. It is approximately 200 kilometres east of Colombo and is situated
                        at an elevation of 1,041 metres above sea level.
                        The area has a rich bio-diversity, dense with numerous varieties of flora and fauna"
                        imagePath ="src/Ella.jpeg"
                    />
                    <PackageComponent
                        title="HANTHANA"
                        image="feature1"
                        desc="The Hanthana Mountain Range lies in central Sri Lanka, south-west of the city of Kandy.
                         It was declared as an environmental protection area in February 2010 under the National
                          Environment Act. The maximum height of the range is 3800 ft.
                         The mountain range consists of seven peaks. The highest one being the Uura Kanda"
                        imagePath ="src/hanthana.jpeg"
                    />
                    <PackageComponent
                        title="HAPUTHALE"
                        image="feature1"
                        desc="Haputale is a town of Badulla District in the Uva Province,
                         Sri Lanka, governed by an Urban Council. The elevation is 1431 m above the sea level.
                          The area has a rich bio-diversity dense with numerous varieties of flora and fauna.
                         Haputale is surrounded by hills covered with cloud forests and tea plantations."
                        imagePath ="src/haputhale.jpg"
                    />
                    </div>
            </div>   
        );
    }

}