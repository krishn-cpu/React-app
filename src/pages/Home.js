import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

const Home = () => {
  // State for counter example
  const [count, setCount] = useState(0);
  // State for loading example
  const [isLoading, setIsLoading] = useState(true);
  // State for user greeting
  const [userName, setUserName] = useState('');
  
  // useEffect for simulating data loading
  useEffect(() => {
    // Simulate API call with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false);
      setUserName('React Developer');
    }, 1500);
    
    // Cleanup function to clear timeout
    return () => clearTimeout(timer);
  }, []);
  
  // Event handlers for counter
  const incrementCount = () => setCount(prevCount => prevCount + 1);
  const decrementCount = () => setCount(prevCount => prevCount - 1);
  const resetCount = () => setCount(0);
  
  return (
    <div className="container">
      <h1>Welcome to React Demo</h1>
      
      {/* Conditional rendering based on loading state */}
      {isLoading ? (
        <div className="loading">Loading user data...</div>
      ) : (
        <div className="welcome-message">
          <h2>Hello, {userName}!</h2>
          <p>This is a simple React application demonstrating various React concepts.</p>
        </div>
      )}
      
      <div className="counter-section">
        <h2>Counter Example</h2>
        <p className="counter">Current count: <span>{count}</span></p>
        
        {/* Button component usage with different props */}
        <div className="button-group">
          <Button 
            onClick={decrementCount} 
            variant="secondary"
            disabled={count === 0}
          >
            Decrement
          </Button>
          
          <Button 
            onClick={resetCount}
            variant="warning"
            disabled={count === 0}
          >
            Reset
          </Button>
          
          <Button 
            onClick={incrementCount}
            variant="primary"
          >
            Increment
          </Button>
        </div>
      </div>
      
      {/* Conditional rendering based on counter value */}
      {count > 10 && (
        <div className="achievement">
          <p>🎉 You've clicked more than 10 times!</p>
        </div>
      )}
      
      <div className="features-section">
        <h2>Features Demonstrated</h2>
        <ul>
          <li>Functional Components</li>
          <li>React Hooks (useState, useEffect)</li>
          <li>Conditional Rendering</li>
          <li>Props and Component Composition</li>
          <li>Event Handling</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

