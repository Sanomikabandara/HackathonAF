import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import PaymentComponent from '../payment';
import HomeComponent from '../home/home';
import LoginComponent from '../login/login';
import PackagesPage from '../packages/pc';
import ToursComponent from '../packages/tours';
import HikingComponent from '../packages/pc';
import SignUp from '../signup/signup';
import Educational from '../../educational/educational';
import selecturplan from '../plans/plan';

export default class NavigationComponent extends Component {

    render() {
        return (
            <Router>

        


        
            
            <div id="change_class" class="flex_container section menu_section">
            <div class="flex_item branding"><p></p></div>
            <div class="flex_item menu_item dropdown">
              <p>Menu</p>
              <div class="dropdown-content">
                <div class="menu_item menu_item_inside"><Link to="/home" ><a><p>Home</p></a></Link></div>
                <div class="menu_item menu_item_inside"><Link to="/login" ><a><p>Login</p></a></Link></div>
                <div class="menu_item menu_item_inside"><Link to="/payment" ><a><p>Payment</p></a></Link></div>
              </div>
            </div>
            <div class="flex_item menu_item menu_item_outside"><Link to="/home" ><a><p>Home</p></a></Link></div>
            <div class="flex_item menu_item menu_item_outside"><Link to="/login" ><a><p>Login</p></a></Link></div>
            <div class="flex_item menu_item menu_item_outside"><Link to="/payment" ><a><p>Payment</p></a></Link></div>
            <div class="flex_item menu_item menu_item_outside"><Link to="/tours" ><a><p>Tours</p></a></Link></div>
            <div class="flex_item menu_item menu_item_outside"><Link to="/signup" ><a><p>SignUp</p></a></Link></div>
            <div class="flex_item menu_item menu_item_outside"><Link to="/educational" ><a><p>Educational</p></a></Link></div>
            <div class="flex_item menu_item menu_item_outside"><Link to="/selectplan" ><a><p>Select Plan</p></a></Link></div>


            <div id="router">
            <Route path="/payment" component={PaymentComponent}/>
            <Route path="/login" component={LoginComponent}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/home" component={HomeComponent} />
            <Route path="/tours" component={ToursComponent} />
            <Route path="/educational" component={Educational} />
            <Route path="/selectplan" component={selecturplan} />
            <Route path="/tours/hiking" component={HikingComponent} />
            </div>


          </div>
          
    
            </Router>

        );
    }

}