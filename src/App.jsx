import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./accueil/Body";
import Navbar from "./accueil/Navbar";
import Article from "./article/Article";
import Cont from "./contact/Cont";
import Footer from "./accueil/Footer";
import { CircularProgress } from "@mui/material";
import { LinearProgress } from "@mui/material";

function App() {
  const [state, setState] = useState(false);

  setTimeout(() => {
    setState(true);
  }, 2000);

  return state ? (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Contact" element={<Cont />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  ) : (
    <div className="glob-loading">
      <h1 id="loading">
        {/* <CircularProgress color="inherit" />
      <LinearProgress color="success" /> */}
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="84"
          height="84"
          fill="none"
          id="svg"
        >
          <path
            stroke="#0A0A30"
            stroke-linecap="round"
            stroke-width="1.5"
            d="M12 6.864v1.333m0 7.606v1.333M17.136 12h-1.333m-7.606 0H6.864m8.768 3.632l-.943-.943M9.311 9.311l-.943-.943m0 7.264l.943-.943m5.378-5.378l.943-.943"
          />
        </svg>
      </h1>
    </div>
  );
}

export default App;
