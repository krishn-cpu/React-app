import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import components
import Navbar from './components/Navbar';

// Import pages
import Home from './pages/Home';
import About from './pages/About';

// Import styles
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation */}
        <Navbar />
        
        {/* Main content area */}
        <main>
          <Routes>
            {/* Define routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Error handling - redirect to home for unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} React Demo Project</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
