import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/create_quiz";
import List from "./pages/list_quiz";
import Edit from "./pages/edit_quiz";
import Answer from "./pages/answer_quiz";
import Home from "./pages/home";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Create />} />
        <Route path="/list" element={<List />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/Answer" element={<Answer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
