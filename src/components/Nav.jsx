import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/nav.css";

function Nav() {
  const [activeItem, setActiveItem] = useState("liHome");
  const handleActive = (id) => {
    setActiveItem(id);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink to={"/"}>
            <div>
              <img src="./public/img/MONLOGO.jpg" alt="logo" />
            </div>
          </NavLink>
        </div>
        <ul>
          <li></li>

          <li
            id="liHome"
            onClick={() => handleActive("liHome")}
            className={activeItem === "liHome" ? "activeNav" : null}
          >
            <NavLink to={"/"}>
              <img src="./public/icons/icons8-accueil-24.png" alt="" />
              <p>Home</p>
            </NavLink>
          </li>

          <li
            id="liAbout"
            onClick={() => handleActive("liAbout")}
            className={activeItem === "liAbout" ? "activeNav" : null}
          >
            <NavLink to={"/about"}>
              <img src="./public/icons/icons8-utilisateur-30.png" alt="" />
              <p>About me</p>
            </NavLink>
          </li>

          <li
            id="liPortefolio"
            onClick={() => handleActive("liPortefolio")}
            className={activeItem === "liPortefolio" ? "activeNav" : null}
          >
            <NavLink to={"/portfolio"}>
              <img src="./public/icons/icons8-portefeuille-24.png" alt="" />
              <p>Portfolio</p>
            </NavLink>
          </li>

          <li
            id="liContact"
            onClick={() => handleActive("liContact")}
            className={activeItem === "liContact" ? "activeNav" : null}
          >
            <NavLink to={"/contact"}>
              <div>
                <img src="./public/icons/icons8-utilisateur-30.png" alt="" />
                <p>Contact</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
