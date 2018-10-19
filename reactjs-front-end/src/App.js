import React, { Component } from 'react';
import Dashboard from'./Components/Dashboard/Dashboard';
import AddJob from'./Components/Dashboard/AddJob';
import { Switch, Route } from 'react-router-dom';
import Signup from'./Components/HomePage/Signup';
import Login from './Components/HomePage/Login';
import Profile from './Components/HomePage/Profile';
import Homepage from './Components/HomePage/Home{age';


import './App.css';

class App extends Component {
  render() {
    return (
      <div>
<HomePage/>        
          {/* <Switch>
            <Route exact path='/' render={() => <Dashboard />}/>
            <Route path='/addjob' render={() => <AddJob/>}/>
            <Route path='/signup' render={() => <Signup/>}/>
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/addjob' render={() => <AddJob/>}/>
            <Route path='/dashboard' render={() => <Dashboard/>}/>
            <Route path='/profile' render={() => <Profile/>}/>
          </Switch>  */}
      </div>
    );
  }
}

export default App;
