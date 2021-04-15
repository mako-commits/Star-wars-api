import React, { useState } from 'react';
import Routes from '../src/components/Routes';
import SideNavigation from './components/sideNavigation';
import './index.css';
import Navbar from './components/navbar/Navbar';


const App =()=> {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  
    return (
      <div className="flexible-content">
        <SideNavigation   sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
        <main id="content" className="p-5">
          <Routes />
        </main>
      </div>
    );
  }


export default App;
