import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import { ShoppingState } from "./context/shopping/ShoppingState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ShoppingState>
          <App />
        </ShoppingState>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
