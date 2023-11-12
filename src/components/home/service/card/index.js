import React from 'react';

const Card = ({ title, content, link }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
        <a href={link} className="card-link" target="_blank" rel="noopener">
          Explore
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Card;
