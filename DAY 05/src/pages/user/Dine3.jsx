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
          <h1>The Classics</h1>
          <p>Enjoy a different iconic British dish every weekday.</p>
          <button onClick={scrollToDetails}>View Details</button>
        </div>
    </div>
      <div className="details-container" ref={detailsRef}>
      <p>The rotating specials include Scampi, Toad in the Hole, Beef Wellington, Pie of the day and Scotch Eggs. </p>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>Timing</h4>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> Monday to Friday - 12:00 to 22:30.<br /></>
      </h2>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '25px' }}>Pricing</h4>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>
      <>
        <span className="diamond-symbol">◇</span> Monday – Scampi AED 100.<br />
        <span className="diamond-symbol">◇</span> Tuesday – Toad in the hole AED 105.<br />
        <span className="diamond-symbol">◇</span> Wednesday – Beef Wellington AED 185.<br />
        <span className="diamond-symbol">◇</span> Thursday – Pie AED 125.<br />
        <span className="diamond-symbol">◇</span> Friday – Scotch Egg AED 45 for 1 piece | AED 99 for 3 pieces.<br />
    </>
      </h2>
      
      <p>For more information and reservation, please contact restaurants@AquaVoyage.com or 800 323 232</p>
      <button onClick={handleBookNowClick}>Reserve a Table</button>
      </div>
      </div>
      
  );
};

export default BackgroundImageWithDetails;
