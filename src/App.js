import React from 'react';
import './App.css';
import Layout from "./components/layout/Layout";
import { Switch, Route  } from 'react-router-dom';
import { Login } from './components/auth/login/Login';
import {AuthenticatedRoute} from './core/guards/AuthenticatedRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <AuthenticatedRoute path="/" component={Layout} />
       </Switch>
    </div>
  );
}

export default App;
