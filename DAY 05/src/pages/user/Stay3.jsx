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
          <h1>Exceptional Villa Escapes</h1>
          <p>Escape to a secluded paradise with azure skies and warm Dubai sunshine.</p>
          <button onClick={scrollToDetails}>View Details</button>
        </div>
    </div>
      <div className="details-container" ref={detailsRef}>
      <p>Time for an exceptional villa escape in a secluded paradise. Nestled amongst leafy landscapes, our exquisite Beit Al Bahar Royal Villas boast an expansive terrace, plunge pool and private butler - with a wealth of benefits waiting to be discovered.. </p>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>Book before 31 March and enjoy:</h4>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> Up to 20% savings on your stay.<br />
        <span className="diamond-symbol">◇</span> USD 200 hotel credit per stay, redeemable on dining and spa treatments.<br />
        <span className="diamond-symbol">◇</span> Return transfers from Dubai International Airport.<br />
        <span className="diamond-symbol">◇</span> Access to AquaVoyage’s Terminal 3 Airport Lounge.<br />
        <span className="diamond-symbol">◇</span> In-villa check-in and dedicated butler service.<br />
        <span className="diamond-symbol">◇</span> Private terrace and plunge pool with Burj Al Arab AquaVoyage views.<br />
        <span className="diamond-symbol">◇</span> Exclusive Club privileges with access to our adult and family lounges .<br />
        <span className="diamond-symbol">◇</span> Daily in-villa breakfast and afternoon tea.<br />
        <span className="diamond-symbol">◇</span> Complimentary evening drinks and a selection of canapés.<br />
        <span className="diamond-symbol">◇</span> Exclusive access to our Executive Pool Club and reimagined beachscape.<br />
        <span className="diamond-symbol">◇</span> Limitless access to Wild Wadi Waterpark™ at your doorstep.<br />
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
