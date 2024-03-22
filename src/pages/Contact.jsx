import React from "react";
import "../style/contact.css";
import Map from "../components/Map";

function Contact() {
  return (
    <div id="contact-container">
      <h1>Contact</h1>
      <div id="content">
        <div id="form">
          <a id="github" href="https://github.com/lutchoo">
            <img src="../public/icons/icons8-github-64.png" alt="" />
          </a>
          <a href="">
            <img src="../public/icons/icons8-linkedin-48.png" alt="" />
          </a>
        </div>
        <div id="map-container">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Contact;
