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
          <h1>AquaVoyage Breaks</h1>
          <p>Exclusive savings of up to 30% when you book Jumeirah Breaks Offer.</p>
          <button onClick={scrollToDetails}>View Details</button>
        </div>
    </div>
      <div className="details-container" ref={detailsRef}>
      <p>As a guest from the GCC or India, be treated to a host of exclusive privileges and savings on your stay. </p>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>Book before 30 September 2024 and enjoy:</h4>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> Up to 30% off our Jumeirah Flexible Rate.<br />
        <span className="diamond-symbol">◇</span> Jumeirah One members can enjoy exclusive Member-only savings.<br />
        <span className="diamond-symbol">◇</span> Access to our private chilled pools and beach.<br />
        <span className="diamond-symbol">◇</span> Unlimited access to Wild Wadi Waterpark™ at your doorstep.<br />
        <span className="diamond-symbol">◇</span> Use of wellness facilities at Talise Spa and J Club.<br />
        <span className="diamond-symbol">◇</span> KiDS Club access for junior guests.<br />
        <span className="diamond-symbol">◇</span> Access to The Club Lounge when staying in a Club Room, Suite or Beit Al Bahar Royal Villa.<br />
        <span className="diamond-symbol">◇</span> The Gift of Time - a complimentary 30-minute spa treatment of your choice, when booking a 60-minute treatment.<br />
        <span className="diamond-symbol">◇</span> Daily breakfast when booking Jumeirah Breaks with Breakfast.<br />
        <span className="diamond-symbol">◇</span> Daily breakfast, and lunch or dinner when booking Jumeirah Breaks with Half Board.<br />
        <span className="diamond-symbol">◇</span> Complimentary wi-fi to share your special moments.<br />
        <span className="diamond-symbol">◇</span> Complimentary upgrade and points exclusively for Jumeirah One members.<br />
      </>
      </h2>
      <div className="details-container" ref={detailsRef}>
      <h1 style={{ fontFamily: 'Candara', fontSize: '35px' }}>Stay in an Ocean Club Room or Suite and relish in:</h1>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> Up to 30% off our Jumeirah Flexible Rate on Clubs and Suites .<br />
        <span className="diamond-symbol">◇</span> Daily breakfast and signature afternoon tea.<br />
        <span className="diamond-symbol">◇</span> Complimentary evening drinks and a selection of canapés.<br />
        <span className="diamond-symbol">◇</span> Access to our exclusive Executive Pool & Beach.<br />
        <span className="diamond-symbol">◇</span> In-suite check-in from 15:00 for suite guests.<br />
      </>
      </h2>
      <div className="details-container" ref={detailsRef}>
      <h1 style={{ fontFamily: 'Candara', fontSize: '35px' }}>Stay in a Beit Al Bahar Royal Villa and enjoy:</h1>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> Up to 30% off our Jumeirah Flexible Rate on Villa bookings.<br />
        <span className="diamond-symbol">◇</span> Your personal butler and private in-villa plunge pool.<br />
        <span className="diamond-symbol">◇</span> Daily breakfast served in-villa.<br />
        <span className="diamond-symbol">◇</span> Signature afternoon tea.<br />
        <span className="diamond-symbol">◇</span> Complimentary evening drinks and a selection of canapés.<br />
        <span className="diamond-symbol">◇</span> Access to our exclusive Executive Pool & Beach.<br />
        <span className="diamond-symbol">◇</span> Return transfers from Dubai International Airport.<br />
        <span className="diamond-symbol">◇</span> Use of AquaVoyage’s Terminal 3 Airport Lounge.<br />
      </>
      </h2>
      <h1 style={{ fontFamily: 'Candara', fontSize: '30px' }}>Book your AquaVoyage Breaks offer with us today:</h1>
      <p>Tel: +971 4 364 7523 <br />
    Email: AHVInfo@AquaVoyage.com</p>
      <button onClick={() => navigate("/book")}>Book Now</button>
      </div>
      </div>
      </div>
      </div>
      
  );
};

export default BackgroundImageWithDetails;
