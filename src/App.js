import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="page"
        timeout={300}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
