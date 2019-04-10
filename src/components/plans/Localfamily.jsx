import React , {Component} from "react";

class Localfamily extends Component{

    render() {

        return(
            <div className="panel panel-default">
                <div className="panel-body">

                    <div className="form-horizontal" color="khaki" align="center">
                        {/*<div className="background1">*/}
                        <h2>Live with a Sri Lankan family for a day</h2>
                        <br/>
                        <br/>

                        <div className="form-group" align="center">
                            <label className="control-label col-sm-2" htmlFor="ap">Available Places:</label>
                            <div className="dropdown">
                                <button className="btn btn-primary dropdown-toggle" type="button"
                                        data-toggle="dropdown">Select a Place
                                    <span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Kandy</a></li>
                                    <li><a href="#">Batticola</a></li>
                                    <li><a href="#">Jaffna</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="form-group" align="center">
                            <label className="control-label col-sm-2" htmlFor="af">Available Families:</label>
                            <div className="dropdown">
                                <button className="btn btn-primary dropdown-toggle" type="button"
                                        data-toggle="dropdown">Select a Family
                                    <span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Perera</a></li>
                                    <li><a href="#">Ranasinghe</a></li>
                                    <li><a href="#">Jayatilaka</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="form-group" align="center">
                            <label className="control-label col-sm-2" htmlFor="pdays">Number of People:</label>
                            <div className="col-lg-3">
                                <input type="text" className="form-control" id="pdays" placeholder="no of people"/>
                            </div>
                        </div>


                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-success">Request</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        )

    }


}
export default Localfamily