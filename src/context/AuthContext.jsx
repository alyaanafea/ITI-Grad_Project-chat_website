import Cookies from "js-cookie";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  // console.log('Authhhh');

  const [authUser, setAuthUser] = useState(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token")
    return token ? token : null;
  }
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
