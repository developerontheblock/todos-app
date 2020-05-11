import React from 'react';
import './App.css';
import Layout from "./components/layout/Layout";
import { Switch, Route  } from 'react-router-dom';
import { Login } from './components/auth/login/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route path="/" component={Layout}></Route>
       </Switch>
    </div>
  );
}

export default App;
