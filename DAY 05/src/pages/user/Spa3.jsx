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
          <h1>Daydreamers</h1>
          <p>A day of head-to-toe rejuvenation at Jumeirah Beach Hotel.</p>
          <button onClick={scrollToDetails}>View Details</button>
        </div>
    </div>
      <div className="details-container" ref={detailsRef}>
      <p>Spend your summer daydreaming away at Jumeirah Beach Hotel with exceptional limited time offers. Revive and rejuvenate from head-to-toe with access to our serene pools and shaded beachscape.</p><br />
      <p>Begin with a 60-minute Revitalising Spa Treatment at Talise Spa. Feel your energy awaken with this full body massage, featuring ancient therapeutic techniques and acupressure point stimulation.</p><br />
      <p>End your experience with a well-deserved, nourishing three-course menu at Nuska Beach.</p><br />

      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>Price: </h4>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> AED 750 per person<br /></>
      </h2>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>For more information and bookings, please contact us:</h4>
      <p>Tel: +971 4 364 7523 <br />
    Email: AHVInfo@AquaVoyage.com</p>
      <button onClick={handleBookNowClick}>Book Now</button>
      </div>
      </div>
      
  );
};

export default BackgroundImageWithDetails;
