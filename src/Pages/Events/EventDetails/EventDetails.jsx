import React from "react";
import { useLoaderData } from "react-router-dom";

const EventDetails = () => {
  const event = useLoaderData();
  const { _id, image, title, date, description, color } = event;
  return (
    <>
      <section
        className="py-20"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#00000080",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="container">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl font-bold text-white">{title}</h2>
            <p className="text-xl text-white">{description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetails;
