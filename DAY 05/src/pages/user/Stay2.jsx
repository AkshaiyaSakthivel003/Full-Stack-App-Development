import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/Stay2.css';

const BackgroundImageWithDetails = () => {
  
  const detailsRef = useRef(null);
  const navigate = useNavigate();

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
          backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/08/04/46/jetty-1807471_640.jpg')`, // Replace with your image URL
        }}
      >
      </div>
      <div className="content">
          <h1>Exceptional Suite Escapes</h1>
          <p>Escape to azure skies, warm Dubai sunshine and unrivalled luxury.</p>
          <button onClick={scrollToDetails}>View Details</button>
        </div>
    </div>
      <div className="details-container" ref={detailsRef}>
      <p>Time for an exceptional suite escape to Dubai. Relish in the unrivalled luxury of our Ocean Club Rooms & Suites. From iconic vistas on your terrace to daily evening drinks at canapes - treat yourself to privileges reserved for a selected few. </p>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>Book before 31 March and enjoy:</h4>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> Up to 20% savings on your stay.<br />
        <span className="diamond-symbol">◇</span> USD 200 hotel credit per stay, redeemable on dining and spa treatments.<br />
        <span className="diamond-symbol">◇</span> In-suite check-in from 15:00.<br />
        <span className="diamond-symbol">◇</span> Access to our family and adult-only Club lounges.<br />
        <span className="diamond-symbol">◇</span> Daily breakfast and signature afternoon tea.<br />
        <span className="diamond-symbol">◇</span> Complimentary evening drinks and canapés.<br />
        <span className="diamond-symbol">◇</span> Exclusive access to our Executive Pool Club and reimagined beachscape .<br />
        <span className="diamond-symbol">◇</span> Limitless Wild Wadi Waterpark™ thrills at your doorstep.<br />
        <span className="diamond-symbol">◇</span> KiDS Club access with daily activities for junior guests.<br />
        <span className="diamond-symbol">◇</span> Use of wellness facilities at Talise Spa and J Club.<br />
        <span className="diamond-symbol">◇</span> 30 complimentary minutes when booking a 60-minute spa treatment.<br />
        <span className="diamond-symbol">◇</span> Daily breakfast, and lunch or dinner when booking Exceptional Escapes with Half Board.<br />
        <span className="diamond-symbol">◇</span> Complimentary wi-fi to share your special moments.<br />
      </>
      </h2>
      
      <h1 style={{ fontFamily: 'Candara', fontSize: '30px' }}>Book your escape with us today:</h1>
      <p>Tel: +971 4 364 7523 <br />
    Email: AHVInfo@AquaVoyage.com</p>
     <button onClick={() => navigate("/book")}>Book Now</button>
      </div>
      </div>
      
  );
};

export default BackgroundImageWithDetails;
