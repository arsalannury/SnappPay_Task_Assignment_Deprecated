import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./layouts/home/HomePage";
import DetailPage from "./layouts/detail/DetailPage";
import "./index.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<DetailPage />} path="/detailPage/:id" />
      </Routes>
    </>
  );
};

export default App;
