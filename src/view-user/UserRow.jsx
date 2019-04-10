import React, { Component } from "react";

export default class UserRow extends Component {
    
    constructor(props) {
        super(props);
        this.id = this.props.id
        this.name = this.props.name;
    }

    render() {
        return (
            <tr>
                <td>{this.id}</td>
                <td>{this.name}</td>
            </tr>
        );
    }

}