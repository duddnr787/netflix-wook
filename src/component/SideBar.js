import React from 'react';
import SortSection from './SortSection';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="year-filter">
        <SortSection style={{ marginBottom: "30px" }}></SortSection>
        {/* <FilterSection></FilterSection> */}
      </div>
    </div>
  );
};

export default SideBar;