// import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./layouts/HomePage/homePage";
import ProductDetail from './layouts/ProductDetail-Speaker/PDSpeaker'

function App() {
  return (
    <> 
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/" component={ProductDetail}/>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
