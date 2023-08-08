import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>home page</div>} />
        <Route path="about" element={<div>about page</div>} />
        <Route path="testing" element={<div><h2>
          testing</h2></div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
