import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./accueil/Body";
import Navbar from "./accueil/Navbar";
import Article from "./article/Article";
import Cont from "./contact/Cont";
import Footer from "./accueil/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Contact" element={<Cont />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
