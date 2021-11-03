import "./App.css";

import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Layout from "./layouts/Layout";
import Login from "./screens/Login";

import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import Register from './screens/Register'
import MainContainer from './containers/MainContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
