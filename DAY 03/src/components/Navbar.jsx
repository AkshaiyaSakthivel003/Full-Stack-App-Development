import '../assets/css/Navbar.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAddIcon from '@mui/icons-material/PersonAdd'; 
import SettingsIcon from '@mui/icons-material/Settings'; // Corrected import path
import LogoutIcon from '@mui/icons-material/Logout'; // Corrected import path

const Navbar = () => {
  const nav = useNavigate();

  const profileImageUrl = localStorage.getItem('profileImage');
  const handleFavClick = () => {
    nav('/fav');
  };

  const handleDashClick = () => {
    nav('/dashboard');
  };
  const handleSearchClick = () => {
    nav('/search');
  };

  const handleGenreClick = () => {
    nav('/genre');
  };

  const handleTrendClick = () => {
    nav('/trending');
  };

  const handleAddAccountClick = () => {
    nav('/register');
    handleClose();
  };
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  
  const handleLogout = () => {
    console.log(localStorage.removeItem('token'));
    console.log(localStorage.removeItem('name'));
    console.log(localStorage.removeItem('password'));
    console.log(localStorage.removeItem('role'));
    
    nav('/');
    handleClose();
  };
  const handleMyprofile = () => {
    nav('/myprofile');
    handleClose();
  };
  
  return (
    <div>
      <video autoPlay muted loop className="background-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <nav className="navbar">
        <div className="navbar-container">
          <button className="logo-button" onClick={handleDashClick}>
            Dashboard
          </button>
          <div className="nav-links">
            <div className="nav-col" onClick={handleTrendClick}>
              New & Popular
            </div>
            <div className="nav-col" onClick={handleSearchClick}>
              Search
            </div>
            <div className="nav-col" onClick={handleFavClick}>
              Favourite
            </div>
            <div className="nav-col" onClick={handleGenreClick}>
              Genre
            </div>
          </div>
        </div>
      </nav>

      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
        >
          <Avatar sx={{ width: 32, height: 32 }}>
            {profileImageUrl ? (
              <img
                src={profileImageUrl}
                alt="Profile"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              'P'
            )}
          </Avatar>
        </IconButton>
      </Tooltip>
      {open && (
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              background: '#778da3',
              border: 'none',
              boxShadow: 'none',
            },
          }}
        >
          <MenuItem onClick={handleMyprofile} sx={{ color: 'white' }}>
            <Avatar /> My Profile
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={handleAddAccountClick}
            sx={{ color: 'white' }}
          >
            <ListItemIcon>
              <PersonAddIcon fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleLogout} sx={{ color: 'white' }}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
