import React, { Component, useEffect } from "react";
import homeImg from "../images/wallpaper-descktop.jpg";

function Home() {
  useEffect(() => {
    document.title = "Nitro Gym";
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="home" id="home">
      <div className="image-container">
        <div className="content">
          <h2>
            YOU'VE GOT NO <span>LIMITS</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
