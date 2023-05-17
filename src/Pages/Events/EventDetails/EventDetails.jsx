import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import moment from "moment/moment";

const EventDetails = () => {
  const event = useLoaderData();
  const { _id, image, title, date, description } = event;
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
            <div className="flex items-center gap-4">
              <FaRegCalendarAlt className="text-3xl text-white" />
              <p className="text-xl text-white font-semibold">
                {moment(date).format("DD MMM, YYYY")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetails;
