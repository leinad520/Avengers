import React, {useState} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import AvengersList from './Components/AvengersList';
import Home from './Components/Home';
import Avenger from './Components/Avenger';
import './App.css';
import {avengers} from './Components/avengersData.js'

function App() {
  const hero = avengers;
  return (
    <div>
      <ul className="navbar">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/avengers'>Avengers</Link></li>
      </ul>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/avengers'>
          <AvengersList />
        </Route>
        <Route path='/avengers/:hero'>
          <Avenger key={hero.id} hero={hero} />
        </Route>
        
      </Switch>
        
    </div>
  );
}

export default App;
