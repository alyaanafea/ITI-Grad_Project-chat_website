import { Link } from "react-router-dom";
import BlackLogo from "../logo/BlackLogo";

function RegisterLogo() {
  return (
    <div className="min-h-full text-black md:flex md:flex-col md:justify-evenly md:items-center lg:pt-14 lg:pb-24 md:py-12 hidden ">
      <div className="flex flex-col lg:gap-7  justify-center items-center">
        <div>
          <BlackLogo />
        </div>
        <div className="flex flex-col justify-center items-center gap-1 ">
          <h1 className="text-5xl tracking-[.15em] font-semibold">
            TYPING....
          </h1>
          <p className="font-normal text-base tracking-wider">
            Connect to the world in few touches
          </p>
        </div>
      </div>
      <div className=" pb-16 flex flex-col justify-center items-center gap-5">
        <p className="font-medium text-base tracking-wider">
          If you are already member login now...
        </p>
        <Link
          to={"/login"}
          className="btn btn-wide text-black bg-transparent border-black	 btnhover hover:text-white"
        >
          Login now...{" "}
        </Link>
      </div>
    </div>
  );
}

export default RegisterLogo;
