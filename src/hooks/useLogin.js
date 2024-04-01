import { useState } from "react";
import axios from "axios";
// import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import useAuth from "./useAuth";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const { setAuthUser_ } = useAuth();
  const login = async (email, password, rememberMe) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://chat-app-backend-x0hh.onrender.com/api/v1/auth/login",
        { email, password }
      );
      console.log(response);
      const data = JSON.stringify(response.data);
      setAuthUser_(JSON.stringify(response.data.data),rememberMe, "user");
      if (data.error) {
        throw new Error(data.error);
      } else {
        if (rememberMe) {
          localStorage.setItem("token", JSON.parse(data).token);
        } else {
          // console.log(data);
          // console.log(JSON.parse(data).token);
          const resData = JSON.parse(data);
          sessionStorage.setItem("token", `${response.data.token}`);
        }

        setAuthUser(data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
