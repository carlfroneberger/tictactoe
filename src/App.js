import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './Home/Home';
import Overview from './Overview/Overview';
import Game from './PlayGame/Game';

function App() {
  return (
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/Overview'>Overview</Link>
      <Link to='/PlayGame/3'>Play</Link>

      <Switch>
        <Route exact path='/'> <Home /> </Route>
        <Route exact path='/Overview'> <Overview /> </Route>
        <Route exact path='/PlayGame/:id'> <Game /> </Route>
      </Switch>
    
    </BrowserRouter>
  );
}

export default App;
