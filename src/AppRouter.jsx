import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/bottom-card/Details";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
