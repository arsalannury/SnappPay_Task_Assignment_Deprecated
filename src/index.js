import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

const rootElement = ReactDom.createRoot(document.querySelector("#root"));

rootElement.render(<App />);
