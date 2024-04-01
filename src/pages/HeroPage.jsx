import React from "react";
import { Link } from "react-router-dom";
import Slider from "../component/heros/Slider";

const images = [
  "../images/Group 35.png",
  "../images/Group 36.png",
  "../images/Group 37.png",
];

function HeroPage() {
  return (
    <div className="bg-black w-full h-lvh  md:justify-start md:flex flex-col items-center gap-6 overflow-hidden flex justify-between">
      <img
        src="../../images/img_untitled_1_1.png"
        alt=""
        className="w-40 h-auto md:w-40  md:h-auto mt-4"
      />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white font-semibold text-7xl tracking-wider ">
          TYPING...
        </h1>
        <p className="text-white font-normal text-md tracking-wider ">
          Connect to the world in few touches
        </p>
      </div>
      <div className=" text-white flex flex-col mt-5 justify-center items-center">
        <p>Join our world and chat with your friends </p>{" "}
        <p> and create rooms in easy way !!</p>
      </div>
      <div className="flex justify-center gap-3">
        <Link
          to="/register"
          className="btn btn-wide bg-transparent outline-none border-white	text-white btnhover"
        >
          Sign up now for free...
        </Link>
        <Link
          to="/login"
          className="btn btn-wide bg-transparent outline-none border-white	text-white btnhover"
        >
          Login
        </Link>
      </div>
      <div>
        
      </div>
      <div className="overflow-hidden">
        <Slider images={images} />
      </div>
    </div>
  );
}
export default HeroPage;
