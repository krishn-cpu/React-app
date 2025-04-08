import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container">
      <section className="about-section">
        <h1>About This Project</h1>
        
        <div className="about-content">
          <div className="project-description">
            <h2>Project Overview</h2>
            <p>
              This is a demonstration React application created to showcase various React concepts and best practices.
              The application is built using React 18 with functional components and hooks, following modern development patterns.
            </p>
            <p>
              This project is intended as a learning resource for developers who want to understand the fundamentals
              of React development including component structure, state management, routing, and styling.
            </p>
          </div>
          
          <div className="features-list">
            <h2>Key Features Implemented</h2>
            <ul>
              <li>
                <strong>Functional Components</strong> - All components are functional with hooks
              </li>
              <li>
                <strong>React Hooks</strong> - useState and useEffect for state management and side effects
              </li>
              <li>
                <strong>Routing</strong> - Using React Router for navigation between pages
              </li>
              <li>
                <strong>Component Composition</strong> - Reusable components like Button
              </li>
              <li>
                <strong>Event Handling</strong> - Interactive elements with event handlers
              </li>
              <li>
                <strong>Conditional Rendering</strong> - Displaying elements based on state
              </li>
              <li>
                <strong>Responsive Design</strong> - Mobile-friendly layout with CSS
              </li>
            </ul>
          </div>
          
          <div className="contact-section">
            <h2>Contact & Resources</h2>
            <p>
              This project was created as a demonstration for learning purposes.
              For more information on React development, check out the following resources:
            </p>
            
            <ul className="resource-links">
              <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">React Documentation</a></li>
              <li><a href="https://reactrouter.com/en/main" target="_blank" rel="noopener noreferrer">React Router Documentation</a></li>
              <li><a href="https://beta.reactjs.org/learn" target="_blank" rel="noopener noreferrer">Learn React</a></li>
            </ul>
            
            <div className="back-home">
              <Link to="/">
                <Button variant="primary">Back to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

