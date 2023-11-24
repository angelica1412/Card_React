import React from 'react';
import './App.css';

const DeleteRatingButton = ({ onClick }) => {
  return (
    <button className="delete-rating-button" onClick={onClick}>
      Hapus Rating
    </button>
  );
};

export default DeleteRatingButton;
