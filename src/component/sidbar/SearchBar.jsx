import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import './Search.css'
const SearchBar = (props) => {
  const {searchInputHandler} = props


  return (
    <div className='p-5'>
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="search bg-transparent border-none outline-none py-2 pl-10 pr-4 text-white focus:outline-none"
        onChange={(e)=>searchInputHandler(e)}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <RiSearchLine className="text-white" />
      </div>
    </div>
    </div>
  );
};

export default SearchBar;
