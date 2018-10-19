import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import AddJob from './Components/Dashboard/AddJob';
import EditJob from './Components/Dashboard/EditJob';
import { Switch, Route } from 'react-router-dom';
import Signup from './Components/HomePage/Signup';
import Login from './Components/HomePage/Login';
import Profile from './Components/HomePage/Profile';
import HomePage from './Components/HomePage/HomePage';


import './App.css';

class App extends Component {
  state = {
    authorized : false
  }
  render() {
    return (
      <div>
         <Switch>
            <Route exact path='/' render={() => <HomePage />}/>
            <Route path='/addjob' render={() => <AddJob/>}/>
            <Route path='/editjob' render={() => <EditJob/>}/>
            <Route path='/signup' render={() => <Signup/>}/>
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/addjob' render={() => <AddJob/>}/>
            <Route path='/dashboard' render={() => <Dashboard/>}/>
            <Route path='/profile' render={() => <Profile/>}/>
          </Switch> 
      </div>
    );
  }
}

export default App;
