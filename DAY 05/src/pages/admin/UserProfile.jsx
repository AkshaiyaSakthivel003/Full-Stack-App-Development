import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../assets/css/UserProfile.css';

const UserProfiles = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = () => {
    const bookingsFromLocalStorage = JSON.parse(localStorage.getItem('bookings'));
    if (bookingsFromLocalStorage) {
      setBookings(bookingsFromLocalStorage);
    }
  };

  const deleteBooking = (bookingId) => {
    const updatedBookings = bookings.filter(booking => booking.id !== bookingId);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
  };

  const handleAddClick = () => {
    navigate('/addcrud3');
  };

  const handleEditClick = (bookingId) => {
    navigate(`/editcrud3/${bookingId}`);
  };

  const handleAdminClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="crud-container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Booking ID</th>
              <th scope="col">Boat Name</th>
              <th scope="col">User ID</th>
              <th scope="col">Address</th>
              <th scope="col">Number of Persons</th>
              <th scope="col">From Date</th>
              <th scope="col">Till Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.boatName}</td>
                <td>{booking.userId}</td>
                <td>{booking.address}</td>
                <td>{booking.numPersons}</td>
                <td>{booking.fromDate}</td>
                <td>{booking.tillDate}</td>
                <td>
                  <div className='btn-container'>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                      <IconButton size="medium" aria-label="edit" className='edit-button' onClick={() => handleEditClick(booking.id)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton size="medium" color="error" aria-label="delete" className='delete-button' onClick={() => deleteBooking(booking.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='adminhome'>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <IconButton size="medium" aria-label="home" className='adh-button' onClick={handleAdminClick}>
            <HomeIcon />
          </IconButton>
        </Box>
      </div>
    </div>
  );
};

export default UserProfiles;
