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
          backgroundImage: `url('https://amusementlogic.es/wp-content/uploads/2022/05/NEWSLETTER-2022-05-LUXURY-SPA-JULIA-ROSADO-1920x1080-1.jpeg')`, 
        }}
      >
      </div>
      <div className="content">
          <h1>The Rose Ritual</h1>
          <p>Uplift your senses and enrich your body.</p>
          <button onClick={scrollToDetails}>View Details</button>
        </div>
    </div>
      <div className="details-container" ref={detailsRef}>
      <p>Unwind and recharge with a Rose Hydrator face & body treatment designed to nourish and nurture your body.</p><br />
      <p>Your ritual continues with a hydrating facial and relaxing massage to uplift the mind and senses, before you receive Aromatherapy Associates’ Inner Strength bath & shower oil for post-treatment care.</p><br />

      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>Price: </h4>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> AED 1,380 per person (120 minutes)<br /></>
      </h2>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>Book your journey today:</h4>
      <p>Tel: +971 4 364 7523 <br />
    Email: AHVInfo@AquaVoyage.com</p>
      <button onClick={handleBookNowClick}>Book Now</button>
      </div>
      </div>
      
  );
};

export default BackgroundImageWithDetails;
