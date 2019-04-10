import React, { Component } from 'react';

export default class  SignUp extends Component{
    render(){
        return(
            <div className="form-horizontal" align="center">
                <h2>Sign Up</h2>
               {/* <div className="form-group">
                    <input className="form-control"
                        type="text"
                        placeholder="email" />
                        <br/>
                    <input className="form-control"
                           type="password"
                           placeholder="password" />
                    <br/>
                    <button className="bootstrap" type='button'>
                        Sign Up
                    </button>

                </div>*/}
                <div className="form-group">

                <div className="col-lg-3">
                    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter your Email"/>
                </div>
            </div>
                <div className="form-group">

                    <div className="col-lg-3">
                        <label className="control-label col-sm-2" htmlFor="password">Password:</label>
                        <input type="text" className="form-control" id="total" placeholder="Enter your password here"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-60">
                        <button type="submit"  className="btn btn-success">SignIn</button>
                    </div>
                </div>
            </div>
                )
    }
    
}