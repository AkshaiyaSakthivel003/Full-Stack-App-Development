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
          <h1>Seize the Sun</h1>
          <p>Sun, Sand and Saturdays at Nuska Beach Brunch.</p>
          <button onClick={scrollToDetails}>View Details</button>
        </div>
    </div>
      <div className="details-container" ref={detailsRef}>
      <p>Every Saturday, unwind to the relaxing sounds of the undulating waves and ambient beats from the resident DJ as you feast on a family-style brunch. Indulge in the Signature Seafood Platter, Chef’s Selection of Hot & Cold Appetizers, Catch of the Day & Fine Butcher’s Cuts followed by an array of delectable desserts. </p>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>Timing</h4>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> Every Saturday, from 12:30 to 15:30.<br /></>
      </h2>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>Pricing</h4>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> AED 445 - Alcoholic & Non-Alcoholic Package .<br /></>
      </h2>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>Entertainment</h4>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> Resident DJ.<br /></>
      </h2>
      
      <p>For more information and reservation, please contact restaurants@AquaVoyage.com or 800 323 232</p>
      <button onClick={handleBookNowClick}>Reserve a Table</button>
      </div>
      </div>
      
  );
};

export default BackgroundImageWithDetails;
