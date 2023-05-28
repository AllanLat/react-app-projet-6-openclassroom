import React from 'react'
// Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// coeurs d'application
import Home from '../../pages/home/home';
import About from '../../pages/about/about';
import F404 from '../../pages/404/404';


export default function Routess() {
  return (
   <>
    <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Apropos" element={<About />} />
              <Route path='*' element={<F404 />}/>
            </Routes>
      </Router>
   </>
  )
}
