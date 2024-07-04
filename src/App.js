// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingIcons from './components/FloatingIcons';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

function Main() {
  const location = useLocation();

  const handlePhoneClick = () => {
    window.location.href = 'tel:+917869155502'; // Replace with your phone number
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/+917869155502'; // Replace with your WhatsApp number
  };

  return (
    <>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="page"
          timeout={200}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <FloatingIcons handlePhoneClick={handlePhoneClick} handleWhatsAppClick={handleWhatsAppClick} />
    </>
  );
}

export default App;
