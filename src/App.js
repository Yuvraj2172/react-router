import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;
