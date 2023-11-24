import React from 'react';
import './App.css';

const RatingButton = ({ rating, onClick, isActive }) => {
  return (
    <button
      className={`rating-button ${isActive ? 'active' : ''}`}
      onClick={() => onClick(rating)}
    >
      {rating}
    </button>
  );
};

export default RatingButton;
