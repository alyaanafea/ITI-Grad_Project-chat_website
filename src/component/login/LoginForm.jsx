import { useForm } from "react-hook-form";
import useLogin from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogle,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import BlackLogo from "../logo/BlackLogo";
import useRequest from "../../hooks/useRequest";


function LoginForm() {

  const googleLogin = useGoogleLogin({
    onSuccess: Response => console.log(Response),
    flow: 'auth-code',
   
  });
  const{loading_ , data_ , error , requestApi } = useRequest();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loading, login } = useLogin();

  const onSubmit = async (data) => {
    //  requestApi("/auth/login",{
    //   method:"POST",
    //   data:{
    //     email:data.email,
    //     password:data.password
    //   }
    // })
    await login(data.email, data.password, data.rememberMe);
    

    console.log(data);
  };

 

  return (
    <div className="bg-white flex flex-col justify-center items-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:border md:rounded-lg md:shadow-md flex flex-col text-black  gap-8 justify-center items-center pb-12  md:py-16  lg:py-20  lg:px-16 px-8"
      >
        <div className="flex flex-col md:gap-4 gap-1">
          <div className="md:hidden flex flex-col scale-50 justify-start items-center">
            <BlackLogo />{" "}
          </div>
          <h2 className="text-2xl font-bold">Back to your world</h2>
          <p>Choose one of the options to go</p>
        </div>
        <div className="flex flex-col gap-2 md:gap-3">
          <input
            type="email"
            placeholder="example@example.com"
            className="input input-bordered w-full "
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <div className="flex justify-between lg:gap-24 md:gap-5">
            <div>
              <input
                type="checkbox"
                className="checkbox mr-1 checkbox-xs"
                id="rememberMe"
                {...register("rememberMe")}
              />
              <label
                htmlFor="rememberMe"
                className="text-zinc-600 align-top text-xs md:text-sm"
              >
                Remember Me
              </label>
            </div>
            <p className="text-zinc-600 text-xs md:text-sm">Forgot password?</p>
          </div>
        </div>

        <div className="flex justify-between w-full">
          <button  className="bg-gray-100 py-3 md:px-8 px-5 rounded-md btnhover hover:text-white">
            <FontAwesomeIcon icon={faGithub} className="text-3xl " />
          </button>
          <button onClick={() => googleLogin()} className="bg-gray-100 py-3 md:px-8 px-5 rounded-md btnhover hover:text-white">
            <FontAwesomeIcon icon={faGoogle} className="text-3xl " />
          </button>
          <button className="bg-gray-100 py-3 md:px-8 px-5 rounded-md btnhover hover:text-white">
            <FontAwesomeIcon icon={faXTwitter} className="text-3xl " />
          </button>
        </div>
        <div>
          <button
            className="btn btn-wide bg-black text-white btnhover"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Log in"
            )}
          </button>
          <p>
            Don’t have an account?
            <span>
              <Link className="font-grad font-medium" to={"/register"}>
                Sign up
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
