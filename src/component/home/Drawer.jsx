import React from 'react';
import { FaBars } from 'react-icons/fa';
import SearchBar from "../sidbar/SearchBar";
import Toggle_User_Group from "../sidbar/Toggle_User_Group";
import SidBarHeader from "../sidbar/SidBarHeader";
import AllUsers from "../sidbar/AllUsers";
import './Nav.css'
const Drawer = ({openModal, openProfileModal}) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
       
        <label htmlFor="my-drawer" className="btn btn-neutral drawer-button py-2 px-2 mr-1 min-h-0 h-full md:px-4">
          <FaBars style={{ color: 'white'}} /> 
        </label>
      </div> 
      <div className="drawer-side ">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="bgside h-lvh overflow-hidden text-white  ">
      <SidBarHeader openModal={openModal} openProfileModal={openProfileModal} />
      <Toggle_User_Group />
      <AllUsers />
    </div>
      </div>
    </div>
  );
};

export default Drawer;
