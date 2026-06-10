import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Character from "./pages/Character";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { StyledLink } from "./pages/styles";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <StyledLink to="/" aria-label="home page">
          Home
        </StyledLink>
        <StyledLink to="/favorites" aria-label="favorites page">
          Favorites
        </StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/character/:id" element={<Character />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
