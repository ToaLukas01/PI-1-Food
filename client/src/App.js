
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import RecetasDetail from './components/RecetasDetail/RecetasDetail';
import CrearReceta from "./components/CrearReceta/CrearReceta"

function App() {
  return ( <BrowserRouter>
    <div className="App">
      <Switch> 
        <Route exact path = '/' component={Landing}/>
        <Route path = '/home' component={Home}/>
        <Route path = '/home/:id' component={RecetasDetail}/>
        <Route path= '/recipes' component={CrearReceta}/>
      </Switch>
    </div>
  </BrowserRouter>);
}

export default App;
