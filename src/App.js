import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import MerchantManager from "./components/Merchant/MerchantManager";
import MerchantTransactionManager from "./components/MerchantTransaction/MerchantTransactionManager";
import BoxManager from "./components/Box/BoxManager";

function App() {
  return (
  <BrowserRouter>
        <Navigation />
        <Sidebar />
        <Routes>
        <Route exact="true" path="/merchants" element={<MerchantManager/>} />
        <Route exact="true" path="/merchants-transactions" element={<MerchantTransactionManager/>} />
        <Route exact="true" path="/boxes" element={<BoxManager/>} />
        </Routes>
  </BrowserRouter>
  );
}

export default App;
