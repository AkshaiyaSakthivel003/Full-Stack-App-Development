import React, { useEffect, useState } from 'react';
import '../../assets/css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <ul>
        <li><Link to="/landing">Home</Link></li>
        <li><Link to="/cruises">Cruises</Link></li>
        <li><Link to="/aqua">Aquaventures</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/destination">Destinations</Link></li>
        <li className="profile-dropdown" onClick={toggleDropdown}>
          <span><FontAwesomeIcon icon={faUser} /></span>
          <div className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>
            <Link to="/myprofile">My Profile</Link>
            <Link to="/register">Logout</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
