import WhiteLogo from ".././logo/WhiteLogo";
import { Link } from "react-router-dom";

function LoginComponent() {
  return (
    <div className="min-h-full text-white md:flex md:flex-col md:justify-evenly md:items-center lg:pt-14 lg:pb-24 md:py-14 hidden bgc">
      <div className="flex flex-col lg:gap-7  justify-center items-center">
        <div>
          <WhiteLogo />
        </div>
        <div className="flex flex-col justify-center items-center gap-1 ">
          <h1 className="text-5xl tracking-[.15em] font-semibold">
            TYPING....
          </h1>
          <p className="font-thin text-base tracking-wider">
            Connect to the world in few touches
          </p>
        </div>
      </div>
      <div className=" pb-16 flex flex-col justify-center items-center gap-5">
        <p className="font-medium text-base tracking-wider">
          If you are new user please sign up to our world
        </p>
        <Link
          to="/register"
          className="btn btn-wide bg-transparent outline-none border-white	text-white btnhover"
        >
          Sign up now for free...
        </Link>
      </div>
    </div>
  );
}

export default LoginComponent;
