import React from 'react';
import logo from "../assets/Star_Wars_logo-1.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import './sidebar/Sidebar.css'
// const TopNavigation = (re) => {
    const SideNavigation = ({ sidebarOpen, closeSidebar })=>{
    return (
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
            <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid sidebar__img" src={logo} />
            </a>
           
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/" activeClassName="activeClass">
                    <MDBListGroupItem onClick={() => closeSidebar()}>
                        <MDBIcon icon="chart-pie" className="mr-3"  />
                        Films
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/people" activeClassName="activeClass">
                    <MDBListGroupItem onClick={() => closeSidebar()}>
                        <MDBIcon icon="user" className="mr-3" />
                        People
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/planets" activeClassName="activeClass">
                    <MDBListGroupItem onClick={() => closeSidebar()}>
                        <MDBIcon icon="table" className="mr-3" />
                        Planets
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/species" activeClassName="activeClass">
                    <MDBListGroupItem onClick={() => closeSidebar()}>
                        <MDBIcon icon="map" className="mr-3" />
                        Species
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/starships" activeClassName="activeClass">
                    <MDBListGroupItem onClick={() => closeSidebar()}>
                        <MDBIcon icon="map" className="mr-3" />
                        Starships
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/vehicles" activeClassName="activeClass">
                    <MDBListGroupItem onClick={() => closeSidebar()}>
                        <MDBIcon icon="map" className="mr-3" />
                        Vehicles
                    </MDBListGroupItem>
                </NavLink>
                {/* <NavLink to="/404" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3" />
                        404
                    </MDBListGroupItem>
                </NavLink> */}
            </MDBListGroup>
        </div>
    );
}
export default SideNavigation
// export default TopNavigation;