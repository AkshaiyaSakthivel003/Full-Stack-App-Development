import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/Stay2.css';

const BackgroundImageWithDetails = () => {

  const detailsRef = useRef(null);
  const  navigate = useNavigate();
  
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
          <h1>AquaVoyage Flavours</h1>
          <p>Stay and dine at award-winning restaurants across Dubai.</p>
          <button onClick={scrollToDetails}>View Details</button>
        </div>
    </div>
      <div className="details-container" ref={detailsRef}>
      <p>Add extra flavour to your holiday at AquaVoyage Beach Hotel. Wake up to a delicious complimentary daily breakfast, followed by your choice of lunch or dinner at selected award-winning restaurants across Dubai. </p>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>Book before 31 March and enjoy:</h4>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> Complimentary daily breakfast.<br />
        <span className="diamond-symbol">◇</span> Complimentary daily lunch or dinner at selected restaurants across Dubai*.<br />
        <span className="diamond-symbol">◇</span> Access to our private chilled pools and beach.<br />
        <span className="diamond-symbol">◇</span> Unlimited access to Wild Wadi Waterpark™ at your doorstep.<br />
        <span className="diamond-symbol">◇</span> The Gift of Time - Enjoy a complimentary 30-minute treatment of your choice, when you book a 60-minute treatment.<br />
        <span className="diamond-symbol">◇</span> Access to KiDS Club for junior guests.<br />
        <span className="diamond-symbol">◇</span> Access to J Club and Talise Spa facilities.<br />
        <span className="diamond-symbol">◇</span> Wi-fi internet access to share your precious moments.<br />
        <span className="diamond-symbol">◇</span> AquaVoyage One members can enjoy exclusive Member-only savings.<br />
        <span className="diamond-symbol">◇</span> Collect exclusive Jumeirah One Points when you book direct through AquaVoyage.com.<br />
      </>
      </h2>
      
      <h1 style={{ fontFamily: 'Candara', fontSize: '30px' }}>For more information or to make a reservation, please contact us:</h1>
      <p>Tel: +971 4 364 7523 <br />
    Email: AHVInfo@AquaVoyage.com</p>
     <button onClick={() => navigate("/book")}>Book Now</button>
      </div>
      </div>
      
  );
};

export default BackgroundImageWithDetails;
