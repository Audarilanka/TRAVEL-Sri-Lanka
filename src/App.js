import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Pages/Home";
// import MainSection from "./components/HeroSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" exact />
          <Route />
          {} */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
