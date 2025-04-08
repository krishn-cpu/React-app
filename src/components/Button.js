import React from 'react';
import '../styles/global.css';

// Reusable Button component with props
const Button = ({ 
  children, 
  type = 'button', 
  onClick, 
  className = '', 
  variant = 'primary', 
  disabled = false 
}) => {
  // Combining the base button class with variant and any custom classes
  const buttonClass = `button button-${variant} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

