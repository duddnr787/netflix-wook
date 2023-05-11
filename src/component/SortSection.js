import React, { useState } from 'react';


const SortSection = () => {
  const [close, setClose] = useState(false);
  return (
    <div>
      <div className={close ? "sort-section closed" : "sort-section"}>
        <div className="name">
          <h2>Sort</h2>
          <span>
            <i class="fas fa-arrow-right" onClick={(a) => setClose(!close)}></i>
          </span>
        </div>
        <div className="filter">
          
        </div>
      </div>
    </div>
  );
};

export default SortSection;