// ATMCard.jsx
import React, { useState } from "react";
import "./App.css";

const ATMCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card-container ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="card">
        <div className="card-face front bg-blue-200 rounded-xl shadow-md flex flex-col">
          {/* Muka depan kartu */}
          <div className="logo-container">
            <div className="text-lg font-semibold">Bank BCA</div>
            <img
              src="asset/logobca.webp"
              alt="Logo Bank"
              className="w-16 mb-2"
            />
          </div>
          <div className="tengah flex mt-1">
            <img src="asset/cip.png" className="w-11" alt="CIP Logo" />
            <div>
              <p className="text-xl font-bold">**** **** **** 1234</p>
              <p className="text-sm ml-0.5">Maria Angelica V. C</p>
            </div>
          </div>
          <div className="logo mt-2">
            <div className="tanggal">
              <p className="text-xs text-gray-600 w-12 mr-1">Valid Thru:</p>
              <p className="text-xs text-gray-600 mr-3">12/24</p>
            </div>
            <img src="asset/master.png" alt="Logo Bawah" className="w-14" />
          </div>
        </div>
        <div className="card-back bg-blue-200 rounded-xl shadow-md flex flex-col">
          {/* Belakang kartu */}
          <div className="bg-black h-7 full-width mt-5"></div>
          <div className="pl-4">
          <div className="bg-white h-7 full-width mb-10"></div> {/* Tambahan elemen untuk kotak putih */}
          </div>
          <div className="flex p-4">
            <div className="cvv self-end">
              <div className="bg-gray-300 text-white h-7 p-2 rounded-md text-sm">
                123
              </div>
              <div className="text-sm text-black mb-2">CVV</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATMCard;
