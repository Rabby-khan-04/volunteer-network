import React from "react";
import Events from "../../Events/Events";

const Home = () => {
  return (
    <>
      <section className="pt-16">
        <div className="container">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-black uppercase">
              I grow by helping people in need.
            </h2>
            <div className="form-control max-w-md mx-auto">
              <form className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn btn-primary absolute top-0 right-0 text-white rounded-l-none">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Events />
    </>
  );
};

export default Home;
