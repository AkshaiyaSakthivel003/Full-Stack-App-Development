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
          <h1>Afternoon Indulgence</h1>
          <p>Discover the art of relaxation and self-care at Jumeirah Beach Hotel.</p>
          <button onClick={scrollToDetails}>View Details</button>
        </div>
    </div>
      <div className="details-container" ref={detailsRef}>
      <p>Your journey begins with our signature Revitalising Spa Treatment at Talise Spa. Treat yourself with this full body massage, featuring ancient therapeutic techniques and acupressure point stimulation.</p><br />
      <p>The experience continues with a tantilising afternoon tea, savour handcrafted delicacies served at Pearl Lounge.</p><br />

      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>Price: </h4>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> AED 675 for one<br />
        <span className="diamond-symbol">◇</span> AED 730 for one with bubbly beverages<br />
        <span className="diamond-symbol">◇</span> AED 1,270 for two<br />
        <span className="diamond-symbol">◇</span> AED 1,415 for two with bubbly beverages<br /></>
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
