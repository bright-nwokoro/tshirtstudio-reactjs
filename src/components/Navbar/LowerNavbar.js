import React from "react";

function LowerNavbar() {
  return (
    <>
      <div className="lowerNav gutters">
        <div className="lowerNav__item">
          <img
            src="https://images.tshirtstudio.com/general/usp-returns.svg"
            alt="returns-usp-icon"
            className="lowerNav__icon"
          />
          <span className="lowerNav__text">Hassle free returns</span>
        </div>
        <div className="lowerNav__item">
          <img
            src="https://images.tshirtstudio.com/general/usp-discount.svg"
            alt="discount-usp-icon"
            className="lowerNav__icon"
          />
          <span className="lowerNav__text">Volume discounting</span>
        </div>
        <div className="lowerNav__item">
          <img
            src="https://images.tshirtstudio.com/general/usp-delivery.svg"
            alt="delivery-usp-icon"
            className="lowerNav__icon"
          />
          <span className="lowerNav__text">Express delivery</span>
        </div>
        <div className="lowerNav__item">
          <img
            src="https://images.tshirtstudio.com/general/usp-reviews.svg"
            alt="reviews-usp-icon"
            className="lowerNav__icon"
          />
          <span className="lowerNav__text">Over 10000 positive reviews</span>
        </div>
      </div>
    </>
  );
}

export default LowerNavbar;
