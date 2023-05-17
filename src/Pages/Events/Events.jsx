import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import EventCard from "./EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [totalEventsCount, setTotalEventsCount] = useState(null);
  const [perPageEvents, setPerPageEvents] = useState(8);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPage = Math.ceil(totalEventsCount / perPageEvents);

  const pageNumbers = [...Array(totalPage).keys()];
  console.log(pageNumbers);

  useEffect(() => {
    fetch(
      `http://localhost:3000/events?page=${currentPage}&limit=${perPageEvents}`
    )
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, [currentPage, perPageEvents]);

  useEffect(() => {
    fetch("http://localhost:3000/all-events")
      .then((res) => res.json())
      .then((data) => {
        const { totalEvents } = data;
        setTotalEventsCount(totalEvents);
      });
  }, []);

  const options = [8, 16];

  const handlePerPageCount = (e) => {
    setPerPageEvents(e.target.value);
    setCurrentPage(0);
  };

  return (
    <section className="py-20">
      <div className="container space-y-5">
        <div className="flex justify-end items-center gap-4">
          <p className="text-xl font-semibold">Filter All Events : </p>
          <select
            name=""
            defaultValue={options[0]}
            onChange={handlePerPageCount}
            className="select select-bordered"
            id=""
          >
            {options.map((opt) => (
              <option value={opt} key={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-4 gap-7">
          {events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-4">
          {pageNumbers.map((num) => (
            <button
              className={`btn btn-secondary ${
                num === currentPage ? "" : "btn-outline"
              }`}
              key={num}
              onClick={() => setCurrentPage(num)}
            >
              {num + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
