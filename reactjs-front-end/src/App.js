import React, { Component } from 'react';
import Dashboard from'./Components/Dashboard/Dashboard';
import AddJob from'./Components/Dashboard/AddJob';
import { Switch, Route } from 'react-router-dom';
import Signup from'./Components/HomePage/Signup';
import Login from './Components/HomePage/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' render={() => <Dashboard />}/>
            <Route path='/addjob' render={() => <AddJob/>}/>
            {/* <Route path={'/'+selectedPokemon.name} render={() => <SinglePokemon singlePokemon={selectedPokemon}/>}/> */}
          </Switch>
      </div>
    );
  }
}

export default App;
