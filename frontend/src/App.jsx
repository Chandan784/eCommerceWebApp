import React from "react";
import Navbar from "./components/layouts/Navbar";
import Login from "./components/layouts/Login";
import Footer from "./components/layouts/Footer";
import Home from "./components/pages/Home";
import { Outlet } from "react-router-dom";
import ProductDetails from "./components/ui/ProductDetails";
import productData from "./data/data.json";

function App() {
  console.log(productData);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
