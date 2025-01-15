import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import Auth from './Auth/Auth';
import { Calculator } from './Calculator/Calculator';
import {Game} from "./Game/Game";
import {Model} from "./AiModel/Model";
import { Peer } from './Peer/Peer';
import { Sheets } from './Sheets/Sheets'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/calculator" element={<Calculator/>} />
        <Route path="/Model" element={<Model/>} />
        <Route path="/PeerFinder" element={<Peer/>} />
        <Route path="/evaluation_sheets" element={<Sheets/>} />
      </Routes>
    </Router>
  );
}

export default App;
