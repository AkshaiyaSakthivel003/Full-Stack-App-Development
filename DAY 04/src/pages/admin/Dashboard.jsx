import React, { useState } from 'react';
import '../../assets/css/Admin.css';
import Sidebar from '../../components/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import videoSrc from '../../assets/vid2.mp4';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className='dash'>
    <h1>AQUA VOYAGE</h1>
    <h1>ADMIN DASHBOARD</h1>
     <video autoPlay muted loop className="background-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      <div className="action-buttons">
      <button className='side' onClick={openSidebar}>
          Menu
        </button>
        </div>
    </div>
  );
}

export default Dashboard;
