import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./CSS/App.css";
import GameTitles from "./Components/GameTitles";
import SteamRatings from "./Components/SteamRatings";
import SalePrices from "./Components/SalePrices";
import Homepage from "./Components/Homepage";
import Nav from "./Components/Nav"

function App() {
  return (
    <>
    {<Nav/>}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/games" element={<GameTitles />} />
        <Route path="/ratings" element={<SteamRatings />} />
        <Route path="/saleprices" element={<SalePrices />} />
      </Routes>
    </>
  );
}

export default App;
