import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './view-user/User';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Train Ticket Reservation System</h1>
        </header>
        <nav>
          
        </nav>
        <div>
          <Users/>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default App;
