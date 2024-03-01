import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./layouts/home/HomePage";
import DetailPage from "./layouts/detail/DetailPage";
import "./index.css";
import NotFound from "./layouts/notfound/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<DetailPage />} path="/detail/:id" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </>
  );
};

export default App;
