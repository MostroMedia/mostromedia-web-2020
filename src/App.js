import React from 'react';
import {  BrowserRouter as Router,
          Switch,
          Route } from "react-router-dom";
import Home from './Components/Home';
import Skills from "./Components/Skills";
import Team from './Components/Team';
import Work from './Components/Work';

import { windowResize } from "./Components/Utils/utils"

function App() {

  windowResize();

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
            <Skills />
            <Team />
            <Work />
          </Route>
          <Route path="/projects">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
