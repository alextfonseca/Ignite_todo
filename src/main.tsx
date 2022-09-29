import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ToastContainer } from "react-toastify"; // Importamos o Toastify

import "react-toastify/dist/ReactToastify.css"; // O estilo do Toastify

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer
      autoClose={3000}
      theme={"dark"}
      position={"bottom-center"}
    />
    <App />
  </React.StrictMode>,
);
