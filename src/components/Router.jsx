import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Nav from "./Nav";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portefolio from "../pages/Portefolio";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/portfolio"} element={<Portefolio />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
