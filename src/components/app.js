import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import Home from './pages/home'
import Estimates from './pages/estimates'
import AddEstimate from './pages/add-estimate'

export default class App extends Component {
  render() {
    return (
      <div className='app'> 
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-estimate" component={AddEstimate} />
          <Route exact path="/estimates" component={Estimates} />
        </Switch>
      </div>
    );
  }
}

{/* <h2>React Redux Router</h2> 
<h1>DevCamp React Starter</h1> */}