import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import videoSrc from '../../assets/vid1.mp4';
import '../../assets/css/CruizeBook.css';

const CruizeBook = () => {
  const [bookingId, setBookingId] = useState('');
  const [boatName, setBoatName] = useState('');
  const [boatPrice, setBoatPrice] = useState('');
  const [userId, setUserId] = useState('');
  const [address, setAddress] = useState('');
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState('');
  const [boatList] = useState([
    { name: 'CRUIZE', price: '$ 5000' },
    { name: 'CORDELIA', price: '$ 10000' },
    { name: 'TITANIC', price: '$ 20000' }
  ]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!bookingId || !boatName || !boatPrice || !userId || !address || !startDate || !endDate) {
      setError('Please fill in all fields.');
      return;
    }

    // Save data to local storage
    const bookingData = {
      bookingId,
      boatName,
      boatPrice,
      userId,
      address,
      numberOfPersons,
      startDate,
      endDate
    };
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
    console.log('Booking Done');
    
    navigate('/cruizepayment');
  };

  return (
    <div className="cruize-booking-page">
      <video autoPlay muted loop className="background-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="cruize-booking-form-container">
        <form className="cruize-booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>BOOKING ID</label>
            <input
              type="text"
              placeholder="Enter booking ID"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
            />

            <label>USER ID</label>
            <input
              type="text"
              placeholder="Enter user ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            
            <label>ADDRESS</label>
            <input
              type="text"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            
            <label>NUMBER OF PERSONS</label>
            <input
              type="number"
              min="1"
              value={numberOfPersons}
              onChange={(e) => setNumberOfPersons(parseInt(e.target.value))}
            />
            
            <div className="boat-selection">
              <div className="boat-name">
                <label>BOAT NAME</label>
                <select
                  value={boatName}
                  onChange={(e) => setBoatName(e.target.value)}
                >
                  <option value="">Select Boat</option>
                  {boatList.map((boat, index) => (
                    <option key={index} value={boat.name}>
                      {boat.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="boat-price">
                <label>BOAT PRICE</label>
                <select
                  value={boatPrice}
                  onChange={(e) => setBoatPrice(e.target.value)}
                >
                  <option value="">Select Price</option>
                  {boatList.map((boat, index) => (
                    <option key={index} value={boat.price}>
                      {boat.price}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="date-picker-container">
              <div  style={{ marginLeft: '50px' }}>
                <label>FROM DATE</label>
                <br></br>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div style={{ marginLeft: '50px' }}>
                <label>TILL DATE</label>
                <br></br>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-button">BOOK CRUIZE</button>
        </form>
      </div>
    </div>
  );
};

export default CruizeBook;