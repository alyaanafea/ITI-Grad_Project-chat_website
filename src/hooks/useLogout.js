import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import useAuth from "./useAuth";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const { removeAuthUser} = useAuth();

  const logout = async () => {
    setLoading(true);
    try {
      // solution 1
      // if (localStorage.getItem("token")) {
      //   localStorage.removeItem("token");
      // }
      // if (sessionStorage.getItem("token")) {
      //   sessionStorage.removeItem("token");
      // }

      //solution 2
      removeAuthUser();
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
