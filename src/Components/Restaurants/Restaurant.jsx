import React, { useState } from 'react';
import style from './Restaurant.module.css';
import restaurants from './Data.js';
import RestaurantCard from "./RestaurantCard/RestaurantCard.jsx";
import SearchFilter from "./SearchFilter/SearchFilter.jsx"
import RatingFilter from "./RatingFilter/RatingFilter.jsx"

function Restaurant() {
  const [searchKey, setSearchKey] = useState('');
  const [minRating, setMinRating] = useState(0);

  const handleSearchChange = (searchValue) => {
    setSearchKey(searchValue.toLowerCase());
  };

  const handleRatingChange = (ratingValue) => {
    setMinRating(ratingValue);
  };

  const filteredRestaurants = restaurants.filter(res =>
    res.name.toLowerCase().includes(searchKey) && res.rating >= minRating
  );

  return (
    <div className={style.mainContent}>
      <div className={style.filters}>
        <SearchFilter onType={handleSearchChange} />
        <RatingFilter onChange={handleRatingChange} />
      </div>
      <div className={style.restaurants}>
        {filteredRestaurants.map((res) => (
          <RestaurantCard key={res.id} {...res} /> // Ensure each RestaurantCard has a unique key prop
        ))}
      </div>
    </div>
  );
}

export default Restaurant;