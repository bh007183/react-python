import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react"

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Create from './pages/create';

function App() {
 




  return (
   <Router>
     <Route exact path="/">
       <Create/>
     </Route>
     <Route exact path="/login">
       <Login/>
     </Route>
     <Route path="/dashboard">
       <Dashboard/>
     </Route>
   </Router>
  );
}

export default App;
