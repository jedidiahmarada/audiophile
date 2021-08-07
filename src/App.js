// import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./layouts/HomePage/homePage";

function App() {
  return (
    <> 
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage}/>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
