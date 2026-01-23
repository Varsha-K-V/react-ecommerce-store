import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import "./styles/base.css";

ReactDOM.createRoot(document.getElementById("root")).render(
<AuthProvider>
 <CartProvider>
  <BrowserRouter>
    <App />
     <Toaster
      position="top-right"
      toastOptions={{
        duration: 2000,
      }}
    />
  </BrowserRouter>
 </CartProvider>
</AuthProvider>
);

