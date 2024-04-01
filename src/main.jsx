import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastBar, Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="959924258258-lubhrq4i4mbsa8ro40dbeuapva6cpqqh.apps.googleusercontent.com">
        <AuthContextProvider>
          <Toaster/>
          <App />
        </AuthContextProvider>
      </GoogleOAuthProvider>

    </BrowserRouter>
  </React.StrictMode>

);
