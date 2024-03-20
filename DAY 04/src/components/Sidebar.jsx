import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../assets/css/Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { title: 'USER PROFILES', link: '/userprofile' },
    { title: 'USER REVIEW', link: '/userreview' },
    { title: 'BOAT DETAILS', link: '/boatdetails' },
    { title: 'PAYMENT HISTORY', link: '/paymenthistory' },
  ];

  const sidebarRef = useRef();
  const navigate = useNavigate(); 

  useEffect(() => {
    const closeSidebarOnOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
        onClose();
      }
    };

    document.addEventListener('mousedown', closeSidebarOnOutsideClick);

    return () => {
      document.removeEventListener('mousedown', closeSidebarOnOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <br></br>
      <div className="sidebar-content" ref={sidebarRef}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.title} className="sidebar-item" onClick={() => navigate(item.link)}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
