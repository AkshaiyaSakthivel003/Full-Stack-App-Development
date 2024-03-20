import React, { useState } from 'react';
import '../../assets/css/Book.css';
import videoSrc from '../../assets/vid1.mp4';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // default theme css file

const BookingForm = () => {
  const [destination, setDestination] = useState('');
  const [rooms, setRooms] = useState([{ adults: 2, children: 0 }]);
  const [dateRange, setDateRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection'
    }
  ]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showRoomsGuests, setShowRoomsGuests] = useState(false); // State to toggle Rooms & Guests

  const handleAddRoom = () => {
    setRooms([...rooms, { adults: 2, children: 0 }]);
  };

  const handleRemoveRoom = (index) => {
    if (rooms.length > 1) {
      const updatedRooms = [...rooms];
      updatedRooms.splice(index, 1);
      setRooms(updatedRooms);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Booking Done');
  };

  return (
    <div className="booking-form-container">
      <video autoPlay muted loop className="background-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <h3>DESTINATION</h3>
          <div className="dest"> Select Destination
            <input
              type="text"
              placeholder="Choose destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div></div>
          <div className="form-group">
          <div className="date">
            <h4>DATES</h4>
            <div className='sel' onClick={() => setShowCalendar(!showCalendar)}>Select Dates</div>
            {showCalendar && (
              <div className="date-picker-container" style={{ background: 'black' }}>
                <DateRangePicker
                  onChange={(item) => setDateRange([item.selection])}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                 className='range' ranges={dateRange}
                />
              </div>
            )}
          </div></div>
          <div className="form-group">
            <h3>ROOMS</h3>
            <div className="dropdown">
              <button onClick={() => setShowRoomsGuests(!showRoomsGuests)}>
                {showRoomsGuests ? '' : ''} PEOPLE ON BOARD
              </button>
              {showRoomsGuests && (
                <div className="guests">
                  {rooms.map((room, index) => (
                    <div key={index} className="addroom">
                      <h3 className='rm'>ROOM {index + 1}</h3>
                      <br></br>
                      <div className='adult'>
                        <label className='hd'>ADULTS</label>
                        <label className='lb'>(12 Years And Above)</label>
                        <input
                          type="number"
                          min="1"
                          value={room.adults}
                          onChange={(e) => {
                            const updatedRooms = [...rooms];
                            updatedRooms[index].adults = parseInt(e.target.value);
                            setRooms(updatedRooms);
                          }}
                        />
                        <button type="button" onClick={() => {
                          const updatedRooms = [...rooms];
                          updatedRooms[index].adults += 1;
                          setRooms(updatedRooms);
                          }} style={{ marginRight: '10px', marginTop: '10px' }}
                         > + </button>
                        <button type="button" onClick={() => {
                          const updatedRooms = [...rooms];
                          updatedRooms[index].adults -= 1;
                          setRooms(updatedRooms);
                          }} > - </button>
                      </div>
                      <div>
                       <br></br>
                      </div>
                      <div className='child'>
                        <label className='hd'>CHILDREN</label> 
                        <label className='lb'>(11 years And Below)</label>
                        <input
                          type="number"
                          min="0"
                          value={room.children}
                          onChange={(e) => {
                            const updatedRooms = [...rooms];
                            updatedRooms[index].children = parseInt(e.target.value);
                            setRooms(updatedRooms);
                          }}
                        />
                        <button type="button" onClick={() => {
                            const updatedRooms = [...rooms];
                            updatedRooms[index].children += 1;
                            setRooms(updatedRooms);
                          }} style={{ marginRight: '10px', marginTop: '10px' }} > + </button>

                        <button type="button" onClick={() => {
                            const updatedRooms = [...rooms];
                            updatedRooms[index].children -= 1;
                            setRooms(updatedRooms);
                          }} > - </button>
                      </div>
                      <div>
                        <br></br>
                      </div>
                      {index > 0 && <button type="button" onClick={() => handleRemoveRoom(index)}>REMOVE ROOM</button>}
                    </div>
                  ))}
                  <button className='aar' type="button" onClick={handleAddRoom}>ADD ROOM</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <button className="disc" type="submit">DISCOVER STAYS</button>
      </form>
    </div>
  );
};

export default BookingForm;