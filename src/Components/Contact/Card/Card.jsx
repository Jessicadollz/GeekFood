import React from 'react';
import style from '../Card/Card.module.css'; 

function Card({ icon, heading, text }) {
  return (
    <div className={style.card}>
      <div className={style.cardIcon}>{icon}</div>
      <div className={style.cardContent}>
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;
