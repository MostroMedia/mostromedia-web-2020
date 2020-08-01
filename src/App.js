import React from 'react';
import Home from './Components/Home';
import Team from './Components/Team';
import Work from './Components/Work';

import { windowResize } from "./Components/Utils/utils"

function App() {

  windowResize();

  return (
    <div className="App">
      <Home />
      <Team />
      <Work />
    </div>
  );
}

export default App;
