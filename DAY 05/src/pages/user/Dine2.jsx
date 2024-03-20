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
          <h1>Rosé Lunch </h1>
          <p>Sun, Sand and Rosé at Nuska Beach.</p>
          <button onClick={scrollToDetails}>View Details</button>
        </div>
    </div>
      <div className="details-container" ref={detailsRef}>
      <p>Soak up the golden sun as you sip on endless glasses of Ultimate Provence Rosé and overlooking glittering oceanfront views. Enjoy three hours of unlimited wine and a delectable three-course lunch menu.</p>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>Timing</h4>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> Every Saturday, from 12:30 to 15:30.<br /></>
      </h2>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>Pricing</h4>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> AED 345 - Three-course menu with 3 hours free-flow Ultimate Provence Rosé.<br /></>
      </h2>
      
      
      <p>For more information and reservation, please contact restaurants@AquaVoyage.com or 800 323 232</p>
      <button onClick={handleBookNowClick}>Reserve a Table</button>
      </div>
      </div>
      
  );
};

export default BackgroundImageWithDetails;
