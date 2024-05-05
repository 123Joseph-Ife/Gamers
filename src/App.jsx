import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Games from "./Pages/Games";
import RobloxPage from "./Pages/RobloxPage";
import FreeFirePage from "./Pages/FreeFirePage";
import BBRPage from "./Pages/BBRPage";
import Missing from "./Pages/404";
import Roblox from "./Components/Roblox";
import FreeFire from "./Components/FreeFire";
import BBR from "./Components/BBR";
import { createContext } from "react";
import Header from "./Components/Header/Header";

function App() {
  const listOfGames = [
    { id: 1, name: "Roblox", link: "/roblox" },
    { id: 2, name: "Free Fire", link: "/freefire" },
    { id: 3, name: "Beach Buggy 2", link: "/bbr" },
    { id: 4, name: "All Games", link: "/games" },
  ];
  const cards = [
    {
        id: 1,
        rule: "Go to games in the navbar",
        src: ""
    }
  ]
  return (
    <>
      <BrowserRouter>
      <Header listOfGames={listOfGames} />
        <Routes>
          <Route path="/" element={<Home listOfGames={listOfGames} />} />
          <Route path="/games" element={<Games />} />
          <Route path="/roblox" element={<Roblox />} />
          <Route path="/freefire" element={<FreeFire />} />
          <Route path="/bbr" element={<BBR />} />
          <Route path="/roblox/:id" element={<RobloxPage />} />
          <Route path="/freefire/:id" element={<FreeFirePage />} />
          <Route path="/bbr/:id" element={<BBRPage />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
