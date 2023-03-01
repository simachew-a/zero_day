import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
<>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="Checkout" element={<Checkout />} />
          <Route path="" element={<Header />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
