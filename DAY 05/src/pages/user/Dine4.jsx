import React, { useRef } from 'react';
import '../../assets/css/Dine1.css';

const BackgroundImageWithDetails = () => {
  const detailsRef = useRef(null);
  const handleBookNowClick = () => {
    0
  };

  const scrollToDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
    <div className="container1">
      <div
        className="background-image"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1405434199/photo/romantic-sunset-dinner-on-the-beach-table-set-for-two-with-luxurious-food-glasses-of.jpg?s=612x612&w=0&k=20&c=SHAAdtcsTVbej-z7qs2oiXvj_-fZWBCofXavYeG28mw=')`, 
        }}
      >
      </div>
      <div className="content">
          <h1>Visa Dining Offers</h1>
          <p>Exclusive cardholder savings across all our participating restaurants.</p>
          <button onClick={scrollToDetails}>View Details</button>
        </div>
    </div>
      <div className="details-container" ref={detailsRef}>
      <p>Offer benefits. </p>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>Visa Dining offer includes:</h4>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> 20% discount across selected restaurants (Maximum 4 guests per cardholder).<br /></>
      </h2>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>Visa Lunch offer includes:</h4>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> 25% off lunch at selected restaurants (on select weekdays).<br /></>
      </h2>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>Visa Beverage offer includes:</h4>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> 25% off beverages at selected bars (on select weekdays, excluding any happy hours/promotions).<br /></>
      </h2>
      
      <p>For more information and reservation, please contact restaurants@AquaVoyage.com or 800 323 232</p>
      <button onClick={handleBookNowClick}>Reserve a Table</button>
      </div>
      </div>
      
  );
};

export default BackgroundImageWithDetails;
