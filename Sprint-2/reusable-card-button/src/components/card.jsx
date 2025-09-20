
import React from 'react';
import './card.css';

const Card = ({ title, description, image, children }) => {
  return (
    <div className="custom-card">
      {image && <img src={image} alt={title} className="card-img" />}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {children && <div className="card-children">{children}</div>}
      </div>
    </div>
  );
};

export default Card;
