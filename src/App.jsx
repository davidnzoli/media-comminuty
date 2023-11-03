import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./accueil/Body";
import Navbar from "./accueil/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        {/* <Route path="/article" element={<Article />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
