import React from "react";
import Navbar from "./components/layouts/Navbar";
import Login from "./components/layouts/Login";
import Footer from "./components/layouts/Footer";
import Home from "./components/pages/Home";

import productData from "./data/data.json";

function App() {
  console.log(productData);

  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
