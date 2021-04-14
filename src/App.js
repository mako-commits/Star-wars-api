import React, { useState } from 'react';
import Routes from '../src/components/Routes';
import TopNavigation from './components/topNavigation';
import SideNavigation from './components/sideNavigation';
import Footer from './components/Footer';
import './index.css';
import Sidebar from './components/sidebar/Sidebar'
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
        {/* <TopNavigation /> */}
        <SideNavigation   sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
     
        <main id="content" className="p-5">
          <Routes />
        </main>
        {/* <Sidebar/> */}
        {/* <Footer /> */}
      </div>
    );
  }


export default App;
