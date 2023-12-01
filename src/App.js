import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";

function App() {
  return (
  <BrowserRouter>
        <Navigation />
        <Sidebar />
        <Routes>
        </Routes>
  </BrowserRouter>
  );
}

export default App;
