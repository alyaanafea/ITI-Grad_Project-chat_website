import React from "react";
import GrayLogo from "../component/logo/GrayLogo";
import { Link, useNavigate } from "react-router-dom";

const Error = () => {
  const nav = useNavigate();
  return (
    <div className="flex items-center justify-center w-full h-screen bg-msg-container">
      <div className="px-4 text-center sm:text-lg md:text-xl text-stone-500  flex flex-col justify-center items-center gap-6">
        <GrayLogo />
        <h4 className="text-5xl tracking-[.4rem] font-semibold">TYPING....</h4>
        <p className="text-stone-300 text-3xl tracking-[.2rem] font-normal">
          Bad Request 404 "Page Not Found"😥
        </p>{" "}
        <Link to="/home/userchat">
          <button className="btn btn-primary btn-error   btn-wide    ">
            {" "}
            GO TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
