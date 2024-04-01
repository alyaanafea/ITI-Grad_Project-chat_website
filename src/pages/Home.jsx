import { Route, Routes } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import EditDetails from "./EditDetails";
import Auth from "./auth";
import { socket_, SocketContext } from "../context/SocketContext";
import { useAuthContext } from "../context/AuthContext";

function Home() {


  return (
    <>
      {/* <button onClick={logout}>logout</button> */}
      <SocketContext.Provider value={socket_}>
        <Routes>
          <Route path="/*" element={<Auth />} />
          <Route path="/profiledetails" element={<ProfileDetails />} />
          <Route path="/editprofile" element={<EditDetails />} />
        </Routes>
      </SocketContext.Provider>
    </>
  );
}

export default Home;
