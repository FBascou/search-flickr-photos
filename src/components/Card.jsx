import React from "react";

const Card = ({ farmNumber, serverNumber, id, secretNumber, title }) => {
  return (
    <div className="card">
      <img
        src={`https://farm${farmNumber}.staticflickr.com/${serverNumber}/${id}_${secretNumber}_m.jpg`}
        alt={title}
      />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
