import React , {Component} from "react";

class Educational extends Component{

    render() {

        return(
            <div className="panel panel-default">
                <div className="panel-body">

                <div className="form-horizontal" color="khaki" align="center">
                    {/*<div className="background1">*/}
                        <h2>Ecological and Educational Tours</h2>
                        <br/>
                        <br/>

                        <div className="form-group" align="center">
                            <label className="control-label col-sm-2" htmlFor="loc">Enter tour Location:</label>
                            <div className="col-lg-3">
                                <input type="text" className="form-control" id="loc" placeholder="enter locations"/>
                            </div>
                        </div>

                        <div className="form-group" align="center">
                            <label className="control-label col-sm-2" htmlFor="days">Number of  days:</label>
                            <div className="col-lg-3">
                                <input type="text" className="form-control" id="days" placeholder="days"/>
                            </div>
                        </div>
                        <div className="form-group" align="center">
                            <label htmlFor="comment">Purpose:</label>
                            <div className="col-lg-3">
                            <textarea className="form-control" rows="5" id="comment"></textarea>
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
export default Educational