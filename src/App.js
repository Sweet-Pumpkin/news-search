// react
import React from "react";
// react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// routes&components
import Main from "./routes/Main";
import ClipMain from "./routes/ClipMain";
import Header from "./components/Header";
import Title from "./components/Title";

export default function App() {
  return (
    <BrowserRouter>
      <Title />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/clip" element={<ClipMain />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
