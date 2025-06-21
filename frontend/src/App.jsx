import React, { createContext, useState } from "react";
import Navbar from "./components/layouts/Navbar";
import Login from "./components/layouts/Login";
import Footer from "./components/layouts/Footer";
import Home from "./components/pages/Home";
import { Outlet } from "react-router-dom";
import ProductDetails from "./components/ui/ProductDetails";
import productData from "./data/data.json";
import { UserContext } from "./contexts/UserContext";
import { CartContext } from "./contexts/CartContext";

function App() {
  console.log(productData);
  const [userName, setuserName] = useState("");
  const [cartCount, setcartCount] = useState(0);

  return (
    <div>
      <UserContext.Provider value={{ userName, setuserName }}>
        <CartContext.Provider value={{ cartCount, setcartCount }}>
          <Navbar />
          <Outlet />
        </CartContext.Provider>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
