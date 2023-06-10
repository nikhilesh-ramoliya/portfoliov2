import React from 'react'
import Home from './Pages/Home/Home'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Experience from './Pages/Experience/Experience';

import { Design } from './Design';
import Work from './Pages/Work/Work';

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
          <Route path='/work' element={<Work />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
