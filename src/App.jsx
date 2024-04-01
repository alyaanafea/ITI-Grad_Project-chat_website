import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Navigate } from "react-router-dom/dist";
import Error from "./pages/Error";
import Toaster from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import { useState } from "react";
import HeroPage from "./pages/HeroPage";

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <Routes>
        <Route path="/" element={<HeroPage />} />

        <Route
          path="/login"
          element={authUser ? <Navigate to={"/home/userchat"} /> : <Login />}
        />

        <Route
          path="/register"
          element={authUser ? <Navigate to={"/home/userchat"} /> : <Register />}
        />
        <Route
          path="/home/*"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
