import React from 'react';
import './App.css';
import Layout from "./components/layout/Layout";
import { Switch, Route  } from 'react-router-dom';
import { Login } from './components/auth/login/Login';
import {AuthenticatedRoute} from './core/guards/AuthenticatedRoute';
import {NonAuthenticatedRoute} from './core/guards/NonAuthenticatedRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <NonAuthenticatedRoute exact path="/login" component={Login} />
        <AuthenticatedRoute path="/" component={Layout} />
       </Switch>
    </div>
  );
}

export default App;
