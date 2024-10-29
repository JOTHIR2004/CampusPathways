import React from 'react';
import './card1.css';  

const Card = ({ title, desc, img, button, onClick, expanded, content }) => {
  return (
    <div className={`card ${expanded ? 'card-fullscreen' : ''}`}>
      {img && <img src={img} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-desc">{desc}</p>
        <button className="card-button" onClick={onClick}>
          {button}
        </button>
        {expanded && (
          <div className="extra-content">
            <h6>{content}</h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
