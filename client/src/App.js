
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";

function App() {
  return ( <BrowserRouter>
    
      <Switch> 
        <Route exact path = '/' component={Landing}/>
        <Route path = '/home' component={Home}/>
      </Switch>
    <div className="App">
    </div>
  </BrowserRouter>);
}

export default App;
