import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Banner from './components/Banner';
import Home from './components/Home';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="channels" element={<Home />} />
          <Route path={'channels/:id'} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
