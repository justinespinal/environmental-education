import React from "react";

const InfoCard = (props) => {
  return (
    <div className="InfoCard">
      <img src={props.src}></img>
      <p>{props.purp}</p>
    </div>
  );
};

export default InfoCard;
