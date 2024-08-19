import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;