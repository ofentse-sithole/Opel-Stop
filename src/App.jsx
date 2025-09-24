import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import ScrollTop from './components/ScrollTop/ScrollTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Router>
    <ScrollTop/>
        {isLoading ? (
          <SplashScreen />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} /> {/* Default route */}
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </>
        )}
      </Router>
    </HelmetProvider>
  );
}

export default App;