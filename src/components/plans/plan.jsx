import React , {Component} from "react";

class selecturplan extends Component{

        render() {

            return(
                <div className="container">
                <div className="form-horizontal" color="bisque" align="center">
                    {/*<div className="background">*/}
                    <h2>Summary</h2>
                        <br/>
                        <br/>


                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="des">Destinations:</label>
                            <div className="col-lg-3">
                                <input type="text" className="form-control" id="des" placeholder="Destinations"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="category">Categories:</label>
                            <div className="col-lg-3">
                                <input type="text" className="form-control" id="category" placeholder="Catergories"/>
                            </div>
                            {/*<div className="checkbox">
                                <label><input type="checkbox" value=""/>Hiking</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Whale Watching</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Religious & Historical Places</label>
                            </div>

                            <div className="checkbox disabled">
                                <label><input type="checkbox" value="" disabled/>Water Rafting</label>
                            </div>*/}

                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="days">Number of traveling days:</label>
                            <div className="col-lg-3">

                                <input type="text" className="form-control" id="days" placeholder="days"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="total">Total Amount:</label>
                            <div className="col-lg-3">

                                <input type="text" className="form-control" id="total" placeholder="total"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-60">
                                <button type="submit"  className="btn btn-success">Continue</button>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-04">
                                <button type="submit" className="btn btn-primary" >Your Challenge</button>

                            </div>
                        </div>

                    </div>

               {/* </div>*/}
                </div>

            )

        }

}

export default selecturplan;