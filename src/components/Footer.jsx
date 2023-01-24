import React, { Component } from "react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
function Footer() {
  return (
    <footer>
      <div className="left-side">
        © 2021 Copyright: <span>NITRO GYM</span>
      </div>
      <div className="right-side">
        <a href="https://www.facebook.com/Nitrogymclub" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/nitro.fitness/" target="_blank">
          <BsInstagram />
        </a>
        <a href="" target="_blank">
          <BsWhatsapp />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
