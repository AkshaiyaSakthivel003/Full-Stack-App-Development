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
          <h1>Semi Flexible Rate</h1>
          <p>Exclusive savings when your book in advance.</p>
          <button onClick={scrollToDetails}>View Details</button>
        </div>
    </div>
      <div className="details-container" ref={detailsRef}>
      <p>Enjoy exclusive savings on your unforgettable holiday when you book at least three days in advance, with direct Wild Wadi Waterpark™ access. Laze the day away in our temperature-controlled pools, and unwind on our private beach. </p>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>This offer includes the following benefits:</h4>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> Save 15% on our Jumeirah Flexible Rate.<br />
        <span className="diamond-symbol">◇</span> Access to our private chilled pools and beach.<br />
        <span className="diamond-symbol">◇</span> Unlimited direct access to Wild Wadi Waterpark™.<br />
        <span className="diamond-symbol">◇</span> Use of wellness facilities at Talise Spa and J Club.<br />
        <span className="diamond-symbol">◇</span> The Gift of Time - Enjoy a complimentary 30-minute treatment of your choice, when you book a 60-minute treatment.<br />
        <span className="diamond-symbol">◇</span> KiDS Club access for junior guests.<br />
        <span className="diamond-symbol">◇</span> Access to The Club Lounge when staying in a Club Room, Suite or Beit Al Bahar Royal Villa.<br />
        <span className="diamond-symbol">◇</span> Complimentary wi-fi to share your special moments.<br />
        <span className="diamond-symbol">◇</span> AquaVoyage One members can enjoy exclusive Member-only savings.<br />
        <span className="diamond-symbol">◇</span> Collect exclusive Jumeirah One Points when you book direct through AquaVoyage.com.<br />
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
