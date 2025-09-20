import React from 'react'
import './button.css';
export const Button = ({className, text, onClick}) => { // props 
  return (
    <button className= {className} onClick={onClick} style={{ padding: '8px 16px' }}>
      {text}
    </button>
  )
}
