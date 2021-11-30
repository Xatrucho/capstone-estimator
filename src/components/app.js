import React, { Component } from 'react';
// import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import NavBar from './navigation/navbar';
import Home from './pages/home';
import Estimates from './pages/estimates';
import AddEstimate from './pages/add-estimate';

export default class App extends Component {
  render() {
    return (
      <div className='app'> 
        <Router>
          <div>
          <NavBar />

          <Switch>
            <Route exact path="/" component={Home} />              
            <Route path="/navbar" component={NavBar} />           
            <Route path="/add-estimate" component={AddEstimate} />
            <Route path="/estimates" component={Estimates} />
        </Switch>

          </div>
        </Router>

      </div>
    );
  }
}

{/* <h2>React Redux Router</h2> 
<h1>DevCamp React Starter</h1> */}