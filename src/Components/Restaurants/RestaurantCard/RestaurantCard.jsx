import React from 'react'
import style from './RestaurantCard.module.css'
import { FaHeart } from "react-icons/fa";

function RestaurantCard({ URL, name, address, addressLine2, outcode, postcode, rating, typeOfFood }) {
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FaHeart key={i} />);
  }

  return (
    <div className={style.card}>
      <div className={style.imageContainer}>
      <img src='https://i2.wp.com/businessfeverng.com/wp-content/uploads/2018/10/restaurant-loan-success-aboutus.jpg?fit=1200%2C793' alt='Restaurant' />
      </div>
      <div className={style.details}>
        <h3>{name}</h3>
        <p className={style.type}>{typeOfFood}</p>
        <p>{address}, {addressLine2}</p>
        <p>{outcode} {postcode}</p>
        <div className={style.rating}>Rating :&emsp;{stars}</div>
        <a href={URL} target="_blank" rel="noopener noreferrer">Visit Restaurant</a>
      </div>
    </div>
  )
}

export default RestaurantCard;