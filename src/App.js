import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Products from "./components/Pages/Product";
import SignUp from "./components/Pages/SignUp";
import Footer from "./components/Footer";
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
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />

          {/* <Route path="/" exact />
          <Route />
          {} */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
