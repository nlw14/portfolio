import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projets from './component/Projets.js';
import Contact from './component/Contact.js';
import About from './component/About.js';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
