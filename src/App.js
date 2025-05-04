// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
//import Pricing from './components/Pricing';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      {/* <Pricing  /> */}
      <Contact  />
      <Footer />
    </>
  );
}

export default App;
