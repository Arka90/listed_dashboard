import React from "react";
import "./remainder-card.scss";
function RemainderCard({ color, title, time, location }) {
  return (
    <div
      className="remainder-card"
      style={{ borderLeft: `6px solid ${color}` }}
    >
      <h4 className="remainder-title">{title}</h4>
      <p className="time">{time}</p>
      <p className="location">{location}</p>
    </div>
  );
}

export default RemainderCard;
