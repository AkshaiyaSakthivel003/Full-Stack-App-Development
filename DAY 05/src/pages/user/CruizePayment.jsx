import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import videoSrc from '../../assets/vid1.mp4';
import '../../assets/css/CruizeBook.css';

const CruizePayment = () => {
  const [userId, setUserId] = useState('');
  const [bookingId, setBookingId] = useState('');
  const [boatName, setBoatName] = useState('');
  const [boatPrice, setBoatPrice] = useState('');
  const [modeOfPayment, setModeOfPayment] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve booking and user ID from local storage
    const bookingData = JSON.parse(localStorage.getItem('bookingData'));
    if (bookingData) {
      setBookingId(bookingData.bookingId);
      setUserId(bookingData.userId);
      setBoatName(bookingData.boatName);
      setBoatPrice(bookingData.boatPrice);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Auto-generate payment id
    const paymentId = generatePaymentId();

    // Validate form fields
    if (!userId || !bookingId || !boatName || !boatPrice || !modeOfPayment || !paymentDate) {
      setError('Please fill in all fields.');
      return;
    }

    // Save data to local storage
    const paymentData = {
      paymentId,
      userId,
      bookingId,
      boatName,
      boatPrice,
      modeOfPayment,
      paymentDate
    };
    localStorage.setItem('paymentData', JSON.stringify(paymentData));
    console.log('Payment Done');

    // Navigate to confirmation page
    navigate('/confirmation');
  };

  // Function to generate a unique payment ID
  const generatePaymentId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <div className="cruize-booking-page">
      <video autoPlay muted loop className="background-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="cruize-booking-form-container">
        <form className="cruize-booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>USER ID</label>
            <input
              type="text"
              placeholder="Enter user ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              disabled
            />

            <label>BOOKING ID</label>
            <input
              type="text"
              placeholder="Enter booking ID"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
              disabled
            />
            
            <label>BOAT NAME</label>
            <input
              type="text"
              value={boatName} // Display boat name fetched from local storage
              disabled
            />

            <label>BOAT PRICE</label>
            <input
              type="text"
              value={boatPrice} // Display boat price fetched from local storage
              disabled
            />

            <label>MODE OF PAYMENT</label>
            <select
              value={modeOfPayment}
              onChange={(e) => setModeOfPayment(e.target.value)}
            >
              <option value="">Select payment mode</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>

            <label>PAYMENT DATE</label>
            <input
              type="date"
              value={paymentDate}
              onChange={(e) => setPaymentDate(e.target.value)}
            />
          </div>
          
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-button">CONFIRM PAYMENT</button>
        </form>
      </div>
    </div>
  );
};

export default CruizePayment;