import React, { Component } from 'react';
import Dashboard from'./Components/Dashboard/Dashboard';
import AddJob from'./Components/Dashboard/AddJob';
import Signup from'./Components/HomePage/Signup';
import Login from './Components/HomePage/Login';
import './App.css';

class App extends Component {
  render() {
    return (
    <Dashboard/>
    );
  }
}

export default App;
