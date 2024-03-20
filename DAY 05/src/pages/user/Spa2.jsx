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
          <h1>Visa Spa Offer</h1>
          <p>As a Visa cardholder, enjoy unrivalled benefits at the Jumeirah Beach Hotel.</p>
          <button onClick={scrollToDetails}>View Details</button>
        </div>
    </div>
      <div className="details-container" ref={detailsRef}>
      <p>Enjoy an indulgent treatment at Talise Spa during your next stay at Jumeirah Beach Hotel. As a Visa card holder, you can benefit from an additional complimentary 30 minutes when booking a 60-minute spa treatment.</p><br />
      <p>Talise Spa is an oasis of calm with treatments designed for ultimate relaxation. Avail the offer to experience utmost relaxation and reconnect with all your senses.</p><br />

    
      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>For more information and bookings, please contact us:</h4>
      <p>Tel: +971 4 364 7523 <br />
    Email: AHVInfo@AquaVoyage.com</p>
      <button onClick={handleBookNowClick}>Book Now</button>
      </div>
      </div>
      
  );
};

export default BackgroundImageWithDetails;
