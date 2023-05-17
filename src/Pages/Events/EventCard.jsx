import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const { _id, image, title, date, description, color } = event;

  const navigate = useNavigate();

  const handleViewEventDetails = (id) => {
    navigate(`/event-details/${id}`);
  };

  return (
    <div
      onClick={() => handleViewEventDetails(_id)}
      className="card relative rounded-lg overflow-hidden cursor-pointer"
    >
      <div>
        <img src={image} className="rounded-none" alt="" />
      </div>
      <div
        className="card-body items-center absolute inset-x-0 bottom-0"
        style={{ backgroundColor: color }}
      >
        <h2 className="card-title text-center text-white">{title}</h2>
      </div>
    </div>
  );
};

export default EventCard;
