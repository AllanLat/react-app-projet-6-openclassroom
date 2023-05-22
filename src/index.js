import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Templates
import Header from './components/header/header';
import Footer from './components/footer/footer';

// Coeurs d'application
import Home from './pages/home/home';
import About from './pages/about/about';
import F404 from './pages/404/404';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
      <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/test" element={<About />} />
              <Route path="/404" element={<F404 />} />
            
            </Routes>
      </Router>
    <Footer />  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
