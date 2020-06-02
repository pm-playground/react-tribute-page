import React from 'react';
import '../scss/App.scss';
import Navigation from './Navigation';
import { Switch, Route } from 'react-router-dom';
import Drums from './Drums';
import Guitars from './Guitars';
import Vocal from './Vocal';
import Bass from './Bass';
import rootImg from '../assets/root.jpg';

function App() {
  return (

    <div className="App">
      <Navigation />
      <Switch>
        <Route path='/guitars'>
          <Guitars></Guitars>
        </Route>
        <Route path='/drums'>
          <Drums></Drums>
        </Route>
        <Route path='/vocal'>
          <Vocal></Vocal>
        </Route>
        <Route path='/bass'>
          <Bass></Bass>
        </Route>
        <Route path='/'>
          <div>
            <h1>Disturbed</h1>
            <img src={rootImg}></img>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
