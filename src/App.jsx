// App.jsx
import React, { useState } from 'react';
import ATMCard from './ATMCard';
import RatingButton from './RatingButton';
import DeleteRatingButton from './DeleteRatingButton';

const App = () => {
  const [currentRating, setCurrentRating] = useState(null);

  const rateCard = (rating) => {
    setCurrentRating(rating);
  };

  const deleteRating = () => {
    setCurrentRating(null);
  };

  const handleThirdButtonClick = () => {
    // Jika tombol ketiga ditekan, aktifkan juga tombol pertama dan kedua
    if (currentRating === 3) {
      rateCard(1);
      rateCard(2);
    }
  };

  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      <div className="card-container">
        <ATMCard />
        {/* Tombol Rating */}
        <div className="rating-buttons">
          {[1, 2, 3, 4, 5].map((rating) => (
            <RatingButton
              key={rating}
              rating={rating}
              onClick={rateCard}
              isActive={currentRating === rating || (currentRating >= rating && rating <= 5)}
            />
          ))}
        </div>
        {/* Tombol Hapus Rating */}
        <DeleteRatingButton onClick={deleteRating} />
      </div>
    </div>
  );
};

export default App;
