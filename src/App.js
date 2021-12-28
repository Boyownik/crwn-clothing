import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import HomePage from './pages/homepage/homepage-component';


function App() {
  return (
    <div>
      <Switch>
        <div className="App">
          <Route exact path='/' component={HomePage} /> 
        </div>
      </Switch>
    </div>
  );
}

export default App;
