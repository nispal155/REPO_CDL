import React from 'react';
import './customButton.css';

const Button = ({ label, handleClick, variant = 'primary' }) => {
  return (
    <button 
      className={`btn ${variant}`} 
      onClick={handleClick}
    >
      {label}
    </button>
  );
};


export default Button;
