import React, { useState } from "react";

const ImagePopup = ({ imagePath, text, place }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleLinkClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <a href={place} onClick={handleLinkClick} className="hover:opacity-75">
        {text}
      </a>

      {showPopup && (
        <div className="relative top-0 bg-opacity-50 bg-gray-900 flex items-center justify-center">
          <div className="p-4 rounded shadow-md flex flex-col justify-center items-center">
            <img
              src={imagePath}
              alt="Popup Image"
              className="w-3/4 max-w-md "
            />
            <button
              onClick={handlePopupClose}
              className="mt-2 w-1/4 h-1/2 hover:opacity-80 text-center text-[12px] sm:text-[16px] md:text-[18px] font-normal rounded-md border bg-emerald-400 shadow-md shadow-slate-700 border-emerald-400 text-slate-900"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePopup;
