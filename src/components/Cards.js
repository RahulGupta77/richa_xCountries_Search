import React from "react";
import "./style.css";

const Cards = ({ flag }) => {
  return (
    <div className="countryCard">
          <img src={flag.flags.png} alt="flag_image" width={50} height={50} />
          <h2>{flag.name.common}</h2>
    </div>
  ); 
};

export default Cards;
