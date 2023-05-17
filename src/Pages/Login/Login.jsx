import React from "react";
import googleLogo from "../../assets/logos/google-logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-xl mx-auto rounded-md border border-[#ABABAB] px-14 py-40 flex flex-col justify-center items-center">
          <h2 className="text-2xl text-center font-semibold text-blac mb-8">
            Login With
          </h2>
          <button className="btn btn-outline btn-secondary w-full rounded-full flex items-center capitalize font-semibold text-black mb-4">
            <img
              src={googleLogo}
              className="h-8 inline-block flex-grow-0"
              alt=""
            />
            <span className="flex-grow">Continue With Google</span>
          </button>

          <div>
            <p className="font-semibold text-black text-center">
              Don't Have an account?{" "}
              <Link className="text-primary hover:underline" to="/register">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
