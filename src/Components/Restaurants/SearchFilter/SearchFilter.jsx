import React from 'react';
import style from './SearchFilter.module.css';

function SearchFilter({ onType }) {
  const handleChange = (event) => {
    onType(event.target.value); // Passes the typed value back to the parent component
  };

  return (
    <div className={style.searchFilterContainer}>
      <input
        type="text"
        placeholder='Search by name'
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchFilter;
