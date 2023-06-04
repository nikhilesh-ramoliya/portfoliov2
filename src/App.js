import React from 'react'
import Home from './Pages/Home/Home'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Experience from './Pages/Experience/Experience';
import Contact from './Pages/Contact/Contact';

import { Design } from './Design';

function App() {
  return (
    <BrowserRouter>
      <div style={{ color: "white", position: "absolute", top: 0, left: 0, zIndex: -1000000 }}>
        <Design />
      </div>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
