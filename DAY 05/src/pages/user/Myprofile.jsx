import React from 'react';
import '../../assets/css/Myprofile.css';

const MyProfile = () => {
  // Retrieve user data from local storage
  const userData = JSON.parse(localStorage.getItem('userData'));

  return (
    <div className="profile-container">
      <h2 className="profile-heading">My Profile</h2>
      <div className="profile-info">
        <label>Username:</label>
        <p>{userData.username}</p>
      </div>
      <div className="profile-info">
        <label>Email:</label>
        <p>{userData.email}</p>
      </div>
      {/* Add other profile information here */}
    </div>
  );
};

export default MyProfile;
