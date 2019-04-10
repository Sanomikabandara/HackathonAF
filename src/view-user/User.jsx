import React, { Component } from 'react';
import UserRow from './UserRow';

export default class Users extends Component {

    users = [{id: 1, name: "nimal"}, {id: 2, name: "kamal"}, {id: 3, name: "sunil"}];

    constructor(props) {
       super(props)
    }

    onChange(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log(event.target.value);
    }

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log(event.target.value);
    }

    render() {
        return(
            <div>
                <form onSubmit={ event => this.onSubmit(event)}>
                    <p>Hi Users</p>
                    Name: <input onChange={ event => this.onChange(event) } /><br />
                    <input type="submit" />
                </form>

                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.users.map( user => <UserRow id={user.id} name={user.name} />)
                    }
                    </tbody>
                </table>
            </div>
        );
    }

}