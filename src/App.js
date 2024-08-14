import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import Auth from './Auth/Auth';
import { Calculator } from './Calculator/Calculator';
import {Game} from "./Game/Game";
import {Model} from "./AiModel/Model";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/calculator" element={<Calculator/>} />
        <Route path="/Game" element={<Game/>} />
        <Route path="/Model" element={<Model/>} />
      </Routes>
    </Router>
  );
}

export default App;
