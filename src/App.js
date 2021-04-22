import './App.css';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
function App() {
  return (
      <Router>
      <div>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/users">
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Dashboard/appointments">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
