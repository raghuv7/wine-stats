import React from "react";

const Card = ({ data, label }) => {
  return (
    <div className="card">
      <div className="card-item">
        <div className="card-item-a">{data}</div>
        <div className="card-item-b">{label}</div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Card;
