import React from "react";
import { Textload } from "../components/TextLoad";
import "../style/home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="overlay">
        <Textload />
      </div>
    </div>
  );
}

export default Home;
